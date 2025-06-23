'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { NavLink } from './nav-link';

const mainItems = [
  {
    title: 'Página Inicial',
    url: '/pagina-inicial',
    icon: '/img/icons/home-icon.svg',
    label: 'Página Inicial'
  },
  {
    title: 'Clientes',
    url: '/clientes',
    icon: '/img/icons/badge-icon.svg',
    label: 'Clientes'
  },
  {
    title: 'Agenda',
    url: '/agenda',
    icon: '/img/icons/calendar-icon.svg',
    label: 'Agenda'
  },
  {
    title: 'Financeiro',
    url: '/financeiro',
    icon: '/img/icons/coin-icon.svg',
    label: 'Financeiro'
  }
];

const cadastrosItem = {
  title: 'Cadastros',
  url: '/cadastros',
  icon: '/img/icons/notes-icon.svg',
  label: 'Cadastros',
  subItems: [
    {
      title: 'Rotinas',
      url: '/cadastros/rotinas',
      isActive: true
    }
  ]
};

export function AppSidebar() {
  return (
    <Sidebar className="border-r text-primary font-semibold">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <Image
              src="/img/profile-pic/profile-pic.JPG"
              alt="Profile picture"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-sm">Estêvão Ferreira</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation Group */}
        <SidebarGroup className="pt-10">
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full justify-start">
                    <NavLink
                      href={item.url}
                      className="flex items-center space-x-3 px-3 py-2"
                    >
                      <>
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <span className="text-sm">{item.title}</span>
                      </>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key={cadastrosItem.title}>
                <SidebarMenuButton className="w-full justify-start">
                  <div className="flex items-center justify-between w-full px-1 py-2">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={cadastrosItem.icon}
                        alt={cadastrosItem.label}
                        width={20}
                        height={20}
                      />
                      <span className="text-sm">{cadastrosItem.title}</span>
                    </div>
                  </div>
                </SidebarMenuButton>
                <div className="ml-6 mt-1">
                  {cadastrosItem.subItems.map((subItem) => (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        asChild
                        className="w-full justify-start"
                      >
                        <NavLink
                          href={subItem.url}
                          className="flex items-center px-3 py-2 text-sm"
                        >
                          {subItem.title}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
