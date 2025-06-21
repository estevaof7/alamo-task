export const getPageTitle = (pathname: string) => {
  const withoutSlashe = pathname.slice(1);
  const parts = withoutSlashe.split('/');
  const path = parts[0];

  const routeTitles: Record<string, string> = {
    'pagina-inicial': 'Página Inicial',
    cadastros: 'Cadastros',
    clientes: 'Clientes',
    agenda: 'Agenda',
    financeiro: 'Financeiro'
  };

  return routeTitles[path] || 'Cadastros';
};
