const loadingMessages: string[] = [
    "Compilando ideias",
    "Buscando bugs no multiverso",
    "Inicializando café",
    "Treinando redes neurais imaginárias",
    "Carregando variáveis existenciais",
    "Consultando o Stack Overflow",
    "Otimizando algoritmos",
    "Sincronizando com o Git",
    "Formatando pensamentos",
    "Executando testes unitários",
    "Alocando memória para criatividade",
    "Parsing da realidade",
    "Refatorando o universo",
    "Carregando dependências",
    "Desfragmentando código legado",
    "Renderizando pixels",
    "Compilando sarcasmo",
    "Atualizando o kernel mental",
    "Rodando em modo debug",
    "Carregando mais café"
];

export const getLoadingMessage = (): string => {
    return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}