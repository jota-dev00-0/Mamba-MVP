// src/cli/prompt.ts

import { input } from '@inquirer/prompts';

export interface ProjectInfo {
  projectName: string;
  outputDirectory: string;
}
// interface que define o nome do projeto e o diretório de saída


export async function promptProjectInfo(): Promise<ProjectInfo> {
  const projectName = await input({
    message: 'Digite o nome do projeto:',
    validate: (input: string) => input.trim() !== '' || 'Nome do projeto não pode ser vazio.'
  });

  const outputDirectory = await input({
    message: 'Digite o diretório de saída:',
    default: './output',
    validate: (input: string) => input.trim() !== '' || 'Diretório não pode ser vazio.'
  });

  return {
    projectName,
    outputDirectory,
  };

  /*
  função que capta os inputs do usuário como nome do projeto e diretório de saída 
  além de retornar esses valores e exportar para o index.ts
   */
}