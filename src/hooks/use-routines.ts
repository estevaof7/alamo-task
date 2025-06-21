/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
'use client';

import { LabProcedure } from "@/models/routines-model";

export const getRoutines = async (filter?: string) => {
  const res = await fetch(`/api/routine${filter ? `?search=${filter}` : ''}`);
  return res.json();
};

export const postRoutine = async (newRoutine: LabProcedure) => {
  const res = await fetch('/api/routine', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRoutine),
  });
  return res.json();
};