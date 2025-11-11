// privacyModal.config.ts
// Configurações globais do modal de privacidade com suporte a i18n

export interface PrivacyModalConfig {
  message: string;
  privacyPolicyLink: {
    text: string;
    href: string;
  };
  acceptButton: {
    text: string;
  };
}

// Configuração em português (padrão)
export const privacyModalConfigPt: PrivacyModalConfig = {
  message: "Ao continuar navegando neste site, você concorda com o uso de cookies e com a nossa",
  privacyPolicyLink: {
    text: "Política de Privacidade.",
    href: `${import.meta.env.BASE_URL}politica-de-privacidade`
  },
  acceptButton: {
    text: "Eu concordo"
  }
};

// Configuração em espanhol
export const privacyModalConfigEs: PrivacyModalConfig = {
  message: "Al continuar navegando en este sitio, usted acepta el uso de cookies y nuestra",
  privacyPolicyLink: {
    text: "Política de Privacidad.",
    href: `${import.meta.env.BASE_URL}es/politica-de-privacidad`
  },
  acceptButton: {
    text: "Estoy de acuerdo"
  }
};

// Função para obter a configuração baseada no idioma
export function getPrivacyModalConfig(lang: 'pt' | 'es' = 'pt'): PrivacyModalConfig {
  switch (lang) {
    case 'es':
      return privacyModalConfigEs;
    case 'pt':
    default:
      return privacyModalConfigPt;
  }
}