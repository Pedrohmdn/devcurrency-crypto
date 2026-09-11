<div align="center">

# 💰 DevCurrency

### Rastreador de criptomoedas em tempo real | Real-time cryptocurrency tracker

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-8-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-Scoped-1572B6?style=for-the-badge&logo=cssmodules&logoColor=white)

**[🇧🇷 Português](#-português)** · **[🇺🇸 English](#-english)**

</div>

---

# 🇧🇷 Português

## 📋 Sobre o Projeto

**DevCurrency** é uma aplicação web construída com React e TypeScript que permite acompanhar os preços e dados de mercado das principais criptomoedas em tempo real. Os dados são consumidos diretamente da [CoinCap API v3](https://docs.coincap.io/), exibindo informações como preço, capitalização de mercado, volume de negociação e variação nas últimas 24 horas.

## ✨ Funcionalidades

- 🔍 **Busca por criptomoeda** — pesquise qualquer moeda pelo nome e acesse seus detalhes
- 📊 **Tabela de listagem** — visualize as top criptomoedas com preço, market cap, volume e variação 24h
- 📈 **Indicador de variação** — cores dinâmicas (verde/vermelho) indicam valorização ou desvalorização
- 🖼️ **Ícones das moedas** — imagens carregadas automaticamente com fallback para ícone padrão
- 📄 **Paginação infinita** — botão "Mostrar mais" para carregar moedas adicionais
- 📱 **Layout responsivo** — interface adaptada para desktop e mobile com tabela reorganizada em cards
- 🔗 **Página de detalhes** — visualize informações detalhadas de cada criptomoeda individualmente

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| **React** | 19.x | Biblioteca de UI |
| **TypeScript** | 6.x | Tipagem estática |
| **Vite** | 8.x | Build tool e dev server |
| **React Router** | 8.x | Roteamento SPA |
| **React Icons** | 5.x | Biblioteca de ícones |
| **CSS Modules** | — | Estilização com escopo local |
| **CoinCap API** | v3 | Fonte de dados de criptomoedas |

## 📁 Estrutura do Projeto

```
src/
├── assets/                    # Recursos estáticos (logo, imagens)
│   ├── logo.svg
│   └── imageNotFound.svg
├── components/                # Componentes reutilizáveis
│   ├── Header/                # Cabeçalho com logo e navegação
│   ├── ImageWithFallback/     # Componente de imagem com fallback
│   └── Layout/                # Layout principal com Outlet
├── pages/                     # Páginas da aplicação
│   ├── Home/                  # Listagem das criptomoedas
│   ├── Detail/                # Detalhes de uma criptomoeda
│   └── NotFound/              # Página 404
├── services/                  # Configuração de serviços
│   └── api_key.tsx            # Gerenciamento da API key
├── styles/                    # Estilos globais
│   └── index.css
├── utils/                     # Funções utilitárias
│   └── formatters.tsx         # Formatação de moedas (Intl)
├── routes.tsx                 # Configuração de rotas
├── App.tsx                    # Componente raiz
└── main.tsx                   # Entry point
```

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Uma API key do [CoinCap](https://coincap.io/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/dev-currency.git

# Acesse a pasta do projeto
cd dev-currency

# Instale as dependências
npm install
```

### Configuração do Ambiente

Crie um arquivo `.env.local` na raiz do projeto com sua chave de API:

```env
VITE_API_KEY = "sua_api_key_aqui"
```

> 💡 Obtenha sua API key gratuitamente em [coincap.io](https://coincap.io/)

### Execução

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build de Produção

```bash
# Gere o build otimizado
npm run build

# Pré-visualize o build
npm run preview
```

## 🌐 API Utilizada

Este projeto consome a **[CoinCap API v3](https://docs.coincap.io/)** para obter dados em tempo real das criptomoedas.

### Endpoints utilizados:

| Endpoint | Descrição |
|---|---|
| `GET /v3/assets?limit=10&offset={n}` | Lista criptomoedas com paginação |
| `GET /v3/assets/{id}` | Detalhes de uma criptomoeda específica |

---
---

# 🇺🇸 English

## 📋 About the Project

**DevCurrency** is a web application built with React and TypeScript that allows you to track prices and market data of the top cryptocurrencies in real time. Data is fetched directly from the [CoinCap API v3](https://docs.coincap.io/), displaying information such as price, market capitalization, trading volume, and 24-hour change.

## ✨ Features

- 🔍 **Cryptocurrency search** — search for any coin by name and access its details
- 📊 **Listing table** — view top cryptocurrencies with price, market cap, volume, and 24h change
- 📈 **Change indicator** — dynamic colors (green/red) indicate appreciation or depreciation
- 🖼️ **Coin icons** — images loaded automatically with fallback to default icon
- 📄 **Infinite pagination** — "Show more" button to load additional coins
- 📱 **Responsive layout** — interface adapted for desktop and mobile with table reorganized into cards
- 🔗 **Detail page** — view detailed information about each cryptocurrency individually

## 🛠️ Tech Stack

| Technology | Version | Usage |
|---|---|---|
| **React** | 19.x | UI library |
| **TypeScript** | 6.x | Static typing |
| **Vite** | 8.x | Build tool & dev server |
| **React Router** | 8.x | SPA routing |
| **React Icons** | 5.x | Icon library |
| **CSS Modules** | — | Locally scoped styling |
| **CoinCap API** | v3 | Cryptocurrency data source |

## 📁 Project Structure

```
src/
├── assets/                    # Static resources (logo, images)
│   ├── logo.svg
│   └── imageNotFound.svg
├── components/                # Reusable components
│   ├── Header/                # Header with logo and navigation
│   ├── ImageWithFallback/     # Image component with fallback
│   └── Layout/                # Main layout with Outlet
├── pages/                     # Application pages
│   ├── Home/                  # Cryptocurrency listing
│   ├── Detail/                # Cryptocurrency details
│   └── NotFound/              # 404 page
├── services/                  # Service configuration
│   └── api_key.tsx            # API key management
├── styles/                    # Global styles
│   └── index.css
├── utils/                     # Utility functions
│   └── formatters.tsx         # Currency formatting (Intl)
├── routes.tsx                 # Route configuration
├── App.tsx                    # Root component
└── main.tsx                   # Entry point
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [CoinCap](https://coincap.io/) API key

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dev-currency.git

# Navigate to the project folder
cd dev-currency

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the project root with your API key:

```env
VITE_API_KEY = "your_api_key_here"
```

> 💡 Get your free API key at [coincap.io](https://coincap.io/)

### Running

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Generate the optimized build
npm run build

# Preview the build
npm run preview
```

## 🌐 API Used

This project consumes the **[CoinCap API v3](https://docs.coincap.io/)** to obtain real-time cryptocurrency data.

### Endpoints used:

| Endpoint | Description |
|---|---|
| `GET /v3/assets?limit=10&offset={n}` | List cryptocurrencies with pagination |
| `GET /v3/assets/{id}` | Details of a specific cryptocurrency |

---

<div align="center">

Feito com ❤️ por Pedro | Made with ❤️ by Pedro

</div>
