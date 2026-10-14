<div align="center">

<img src="public/assets/images/Logo_solo_semsombra.png" alt="HidroLink Logo" width="120" />

# HidroLink

**Monitoramento inteligente de irrigação para a agricultura familiar**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow?style=flat-square)]()

[Protótipo no Figma](https://www.figma.com/design/y6D8B9mOFiDmsH6TMlJmMd/HidroLink---PI--Sigma-code?node-id=0-1&t=TFhACLHVEbaJlvZe-1) · [Repositório](https://github.com/zezo-00/HidroLink)

</div>

---

## Sobre o projeto

O HidroLink é um sistema web de monitoramento hídrico voltado para pequenos agricultores da região de Goiás. A plataforma coleta dados de sensores IoT instalados no campo — umidade do solo, temperatura, pH e condutividade elétrica — e os exibe em um dashboard em tempo real, gerando recomendações automáticas de irrigação com base nos limites configurados pelo próprio agricultor.

O objetivo é reduzir o desperdício de água e apoiar a tomada de decisão no campo, transformando dados técnicos em informação acessível e acionável.

> Projeto Integrador — Engenharia de Software · UniEvangélica (3º Período)  
> Equipe: Sigma Code Team

---

## Funcionalidades

### Implementadas (Frontend)
- Dashboard principal com cards de umidade, temperatura, umidade do ar e status do sensor
- Recomendação de irrigação com opções de aceitar ou ignorar
- Modal de confirmação de agendamento de irrigação
- Relatório semanal de irrigações e economia estimada
- Navegação entre páginas com React Router
- Página de configurações (idioma, fuso horário, unidades de medida, segurança)
- Tela de clima, relatórios e notícias (estrutura base)
- Tela de login

### Em desenvolvimento
- Backend (FastAPI + Python) — endpoints de autenticação e ingestão de dados
- Integração com sensores ESP32 via Wi-Fi
- Banco de dados PostgreSQL
- Engine de recomendação baseada em thresholds de umidade
- Alertas climáticos via API meteorológica (OpenWeatherMap/INMET)
- Notificações em tempo real (WebSocket)

---

## Tecnologias

### Frontend
| Tecnologia | Uso |
|---|---|
| React 19 | Interface e componentes |
| TypeScript | Tipagem estática |
| Vite | Bundler e servidor de desenvolvimento |
| React Router DOM | Roteamento entre páginas |
| Lucide React | Ícones |
| Comfortaa (Google Fonts) | Tipografia |

### Backend *(planejado)*
| Tecnologia | Uso |
|---|---|
| Python + FastAPI | API REST |
| PostgreSQL + TimescaleDB | Banco de dados relacional e séries temporais |
| Celery + Redis | Filas de processamento assíncrono |
| JWT | Autenticação |

### Hardware *(planejado)*
| Tecnologia | Uso |
|---|---|
| ESP32 | Microcontrolador Wi-Fi |
| Sensor RS485 | Leitura de umidade, pH e condutividade |

---

## Estrutura do projeto

```
HidroLink/
├── public/
│   └── assets/images/
├── src/
│   ├── Components/
│   │   ├── NavBarSuperior/
│   │   ├── NavBarInferior/
│   │   ├── ModalConfirmacao/
│   │   └── Layout.tsx
│   ├── mocks/
│   │   └── dados.ts        (dados fictícios até a API ficar pronta)
│   ├── Pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Monitoramento/
│   │   ├── Clima/
│   │   ├── Relatorio/
│   │   ├── Noticias/
│   │   └── Configs/
│   ├── App.tsx
│   ├── App.css
│   ├── global.css
│   └── main.tsx
```

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# Clone o repositório
git clone https://github.com/zezo-00/HidroLink.git

# Acesse a pasta do frontend
cd HidroLink/Frontend

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Equipe

| Nome | Função |
|---|---|
| José Henrique Oliveira | Frontend |
| Igor Ferreira | Backend |
| João Victor Vieira | Backend |
| Hugo Alves | Backend / Hardware |

---

<div align="center">
  <sub>© 2026 HidroLink · Sigma Code Team · Tecnologia para agricultura sustentável</sub>
</div>
