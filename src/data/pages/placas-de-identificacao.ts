// src/data/pages/home.ts
import img1 from "../../assets/images/portfolio/gravasteel-portfolio-01.webp";
import img2 from "../../assets/images/portfolio/gravasteel-portfolio-02.webp";
import img3 from "../../assets/images/portfolio/gravasteel-portfolio-03.webp";
import img4 from "../../assets/images/portfolio/gravasteel-portfolio-04.webp";
import img5 from "../../assets/images/portfolio/gravasteel-portfolio-05.webp";
import img6 from "../../assets/images/portfolio/gravasteel-portfolio-06.webp";
import img7 from "../../assets/images/portfolio/gravasteel-portfolio-07.webp";
import img8 from "../../assets/images/portfolio/gravasteel-portfolio-08.webp";
import img9 from "../../assets/images/portfolio/gravasteel-portfolio-09.webp";
import img10 from "../../assets/images/portfolio/gravasteel-portfolio-10.webp";

import imgHero from "../../assets/images/portfolio/gravasteel-portfolio-09.webp";
import imgDifferentials from "../../assets/images/portfolio/gravasteel-portfolio-10.webp";


import logo from "../../assets/images/logo-gravasteel.webp";
import IconWhatsapp from "../../assets/icons/brand-whatsapp.svg";



export const pageData = {

   hero: {
      image: imgHero,
      title: "Placas de Identificação em Aço Inox (420) com Gravação a Laser",
      subtitle: " Grave informações técnicas, números de série, instruções de operação, logos e selos de garantia em placas inoxidáveis projetadas para resistir a uso intenso, abrasão e condições severas.",
      buttonText: "Fale com um especialista",
      buttonLink:
         "https://wa.me/5554981171189?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20vendedor.",
   },

   gallery: {
      title: "Projetos em Destaque",
      subtitle: "Veja alguns dos nossos melhores trabalhos realizados",
      items: [
         { src: img1, alt: "Projeto 1" },
         { src: img2, alt: "Projeto 2" },
         { src: img3, alt: "Projeto 3" },
         { src: img4, alt: "Projeto 4" },
         { src: img5, alt: "Projeto 5" },
         { src: img6, alt: "Projeto 6" },
         { src: img7, alt: "Projeto 7" },
         { src: img8, alt: "Projeto 8" },
         { src: img9, alt: "Projeto 9" },
         { src: img10, alt: "Projeto 10" },
      ],
   },

   navbarMenu: {
      logo,
      links: [
         { href: "#beneficios", text: "Benefícios" },
         { href: "#aplicacoes", text: "Aplicações" },
         { href: "#portfolio", text: "Portfolio" },
         { href: "#clientes", text: "Clientes" },
         { href: "#sobre", text: "Sobre" },
         { href: "#faq", text: "FAQ" },
      ],
      ctaDesktop: {
         text: "Fale conosco",
         href:
            "https://wa.me/5554981171189?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20vendedor.",
      },
      ctaMobile: {
         text: "Fale com um especialista",
         href: "https://calendly.com/ani-positivestudio/30min",
      },
      iconComponent: IconWhatsapp, 
   },

   benefits: {
      title: "Benefícios das Placas de Identificação em Inox",
      items: [
         {
            icon: "heroicons:shield-check",
            title: "Durabilidade extrema",
            description:
               "Inox 420 escovado resistente à corrosão, impacto e temperatura — legibilidade garantida por anos.",
         },
         {
            icon: "heroicons:qr-code",
            title: "Leitura permanente",
            description:
               "Gravação a laser que não desbota e mantém contraste perfeito mesmo em ambientes industriais severos.",
         },
         {
            icon: "heroicons:viewfinder-circle",
            title: "Alta precisão nos detalhes",
            description:
               "Ideal para logos, códigos, números de série e instruções técnicas com acabamento limpo e definido.",
         },
         {
            icon: "heroicons:wrench",
            title: "Total personalização",
            description:
               "Formato, espessura, conteúdo e layout técnico configurados sob medida para cada projeto.",
         },
      ],
   },

   applications: {
      badge: "Aplicações",
      title: "Onde as placas são mais utilizadas?",
      image: imgDifferentials,
      items: [
         {
            title: "Matrizarias e ferramentarias",
            description: "Gravações técnicas para identificação de componentes, ajustes, medidas e informações essenciais para o uso e manutenção dos moldes.",
         },
         {
            title: "Fabricantes de máquinas e equipamentos",
            description: "Identificação permanente de painéis, comandos, dispositivos, placas patrimoniais e números de série.",
         },
         {
            title: "Setor automotivo",
            description: "Placas técnicas, rastreabilidade de peças, marcações de segurança e etiquetas industriais de alta resistência.",
         },
         {
            title: "Metalúrgicas e indústrias de transformação",
            description: "Identificação de processos, equipamentos, ordens de produção e componentes sujeitos a ambientes severos.",
         },
         {
            title: "Frigoríficos e laticínios",
            description: "Marcações resistentes à umidade, agentes de limpeza e processos de higienização industrial.",
         },
         {
            title: "Construção civil e esquadrias",
            description: "Placas informativas, numeração, identificação de componentes e marcação de projetos.",
         },
         {
            title: "Logística e armazenamento",
            description: "Identificação permanente de racks, contêineres, carrinhos, caixas e equipamentos de movimentação.",
         },
         {
            title: "Equipamentos especiais ou customizados",
            description: "Placas sob medida para rastreabilidade, instruções técnicas, marcações operacionais e layout industrial.",
         },
      ],
   },

   faq: {
      badge: "Dúvidas",
      title: "Perguntas frequentes",
      intro: "Entenda como funciona o processo de gravação a laser da Gravasteel.",
      items: [
         {
            question: "O atendimento é feito apenas na Gravasteel ou também no cliente?",
            answer:
               "Oferecemos atendimento flexível, com gravações realizadas em nossa estrutura em Caxias do Sul ou diretamente nas instalações do cliente, conforme a necessidade e o porte das peças.",
         },
         {
            question: "Quais materiais podem ser gravados a laser?",
            answer:
               "Realizamos gravações em aços temperados, inox, alumínio, latão, cobre e outras ligas metálicas. O processo é ajustado conforme a composição e dureza do material.",
         },
         {
            question: "Existe limitação de tamanho para as peças?",
            answer:
               "Não. Nossos equipamentos comportam gravação a laser desde pequenas peças técnicas até ferramentais de grandes dimensões, de até 100 toneladas. Na sede da Gravasteel, a capacidade é de peças de até 500 kg; acima desse peso, o serviço é realizado diretamente nas instalações do cliente.",
         },
      ],
   },

   footer: {
      menu: [
         { href: "#beneficios", text: "Benefícios" },
         { href: "#aplicacoes", text: "Aplicações" },
         { href: "#portfolio", text: "Portfolio" },
         { href: "#clientes", text: "Clientes" },
         { href: "#sobre", text: "Sobre a Gravasteel" },
         { href: "#faq", text: "Perguntas Frequentes" },
      ],
   }
};
