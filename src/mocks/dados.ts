// Dados mockados usados pela interface enquanto o backend não está pronto.
// Quando a API existir, basta trocar estes objetos pelas respostas dos endpoints
// mantendo os mesmos tipos.

// --- Home ---
export type ResumoHome = {
  umidadeSolo: number
  umidadeSoloMinima: number
  temperatura: number
  temperaturaMaxima: number
  umidadeAr: number
  sensorOnline: boolean
  ultimaLeitura: string
}

export type ItemRelatorioSemanal = {
  data: string
  detalhe: string
  economia: string
}

export const resumoHome: ResumoHome = {
  umidadeSolo: 38,
  umidadeSoloMinima: 45,
  temperatura: 28,
  temperaturaMaxima: 32,
  umidadeAr: 62,
  sensorOnline: true,
  ultimaLeitura: 'há 2 min',
}

export const recomendacaoIrrigacao = {
  horario: '18h',
  duracaoMin: 45,
  setor: 'Setor Sul',
}

export const relatorioSemanal: ItemRelatorioSemanal[] = [
  { data: 'Ontem, 18:00', detalhe: 'Irrigação Concluída - 40 min', economia: 'R$ 4,50' },
  { data: '14/06, 08:00', detalhe: 'Cancelado (Precedência Climática)', economia: 'R$ 8,00' },
  { data: '13/06, 17:30', detalhe: 'Irrigação Concluída - 30 min', economia: 'R$ 3,20' },
]

// --- Monitoramento ---
export type LeituraSetor = { setor: string; umidade: number }
export type StatusSensor = { nome: string; online: boolean }

export const umidadePorSetor: LeituraSetor[] = [
  { setor: 'Setor A', umidade: 68 },
  { setor: 'Setor B', umidade: 61 },
  { setor: 'Setor C', umidade: 72 },
]

export const temperaturaSolo = { media: 24, minima: 22, maxima: 26 }

export const statusSensores: StatusSensor[] = [
  { nome: 'Sensor 1', online: true },
  { nome: 'Sensor 2', online: true },
  { nome: 'Sensor 3', online: true },
]

// --- Clima ---
export type PrevisaoDia = { dia: string; temperatura: number; chanceChuva: number }

export const climaHoje = {
  temperatura: 26,
  descricao: 'Parcialmente nublado',
  umidade: 68,
  chanceChuva: 20,
  recomendacao: 'Irrigação recomendada hoje à tarde',
}

export const previsaoProximosDias: PrevisaoDia[] = [
  { dia: 'Amanhã', temperatura: 22, chanceChuva: 10 },
  { dia: 'Quinta', temperatura: 21, chanceChuva: 15 },
  { dia: 'Sexta', temperatura: 19, chanceChuva: 9 },
  { dia: 'Sábado', temperatura: 27, chanceChuva: 20 },
  { dia: 'Domingo', temperatura: 30, chanceChuva: 22 },
]

// --- Relatórios ---
export type EstatisticaMes = {
  label: string
  valor: string
  cor: 'verde' | 'roxo' | 'rosa'
}

export const relatoriosDisponiveis: string[] = [
  'Consumo de água - Novembro',
  'Eficiência de irrigação',
  'Análise de custos',
  'Histórico climático',
]

export const estatisticasMes: EstatisticaMes[] = [
  { label: 'Economia de água', valor: '1.140L', cor: 'verde' },
  { label: 'Redução de Custos', valor: 'R$ 230,10', cor: 'roxo' },
  { label: 'Eficiência Média', valor: '92%', cor: 'rosa' },
]

// --- Notícias ---
export type Noticia = {
  tag: string
  tempo: string
  titulo: string
  resumo: string
}

export const noticias: Noticia[] = [
  {
    tag: 'Tecnologia',
    tempo: '2h Atrás',
    titulo: 'Nova tecnologia IoT revoluciona agricultura familiar',
    resumo: 'Sensores inteligentes ajudam pequenos produtores a otimizar o uso de água',
  },
  {
    tag: 'Mercado',
    tempo: '5h Atrás',
    titulo: 'Preços da soja sobem 5% no mercado internacional',
    resumo: 'Demanda crescente impulsiona valorização do grão brasileiro',
  },
  {
    tag: 'Política',
    tempo: '9h Atrás',
    titulo: 'Governo anuncia novo programa de crédito rural',
    resumo: 'R$ 2 Bilhões serão destinados para agricultura sustentável',
  },
  {
    tag: 'Brasil',
    tempo: '23h Atrás',
    titulo: 'Qual o papel da agricultura no combate à fome no Brasil?',
    resumo:
      'Histórias de moradores de Betânia do Piauí, onde a pobreza e a seca extrema sempre dificultaram o acesso a comida saudável.',
  },
]
