// src/data/pages/home.ts
import img1 from "../../assets/images/portfolio/gravasteel-portfolio-11.webp";
import img2 from "../../assets/images/portfolio/gravasteel-portfolio-12.webp";
import img3 from "../../assets/images/portfolio/gravasteel-portfolio-13.webp";
import img4 from "../../assets/images/portfolio/gravasteel-portfolio-14.webp";
import img5 from "../../assets/images/portfolio/gravasteel-portfolio-15.webp";
import img6 from "../../assets/images/portfolio/gravasteel-portfolio-16.webp";
import img7 from "../../assets/images/portfolio/gravasteel-portfolio-17.webp";
import img8 from "../../assets/images/portfolio/gravasteel-portfolio-18.webp";
import img9 from "../../assets/images/portfolio/gravasteel-portfolio-19.webp";
import img10 from "../../assets/images/portfolio/gravasteel-portfolio-26.webp";
import img11 from "../../assets/images/portfolio/gravasteel-portfolio-27.webp";

import imgHero from "../../assets/images/gravasteel-hero-gravacao-laser.webp";

import imgApplication from "../../assets/images/gravasteel-gravacao-laser-01.webp";

import logo from "../../assets/images/logo-gravasteel.webp";
import IconWhatsapp from "../../assets/icons/brand-whatsapp.svg";


import { businessData } from "../businessData";


export const pageData = {
   hero: {
      image:  imgHero,
      title: "Gravação a Laser para Indústria e Branding",
      subtitle:
         "A Gravasteel realiza gravações a laser de alta precisão em peças, componentes e ferramentais de diferentes tamanhos, desde postiços simples até ferramentais de grande porte com até 100 toneladas.",
      buttonText: "Fale com um especialista",
      buttonLink: businessData.whatsappLink,
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
            "https://wa.me/5554936183497?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20vendedor.",
      },
      ctaMobile: {
         text: "Fale com um especialista",
         href: "https://wa.me/5554936183497?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20vendedor.",
      },
      iconComponent: IconWhatsapp, // ícone compartilhado
   },

   gallery: {
      title: "Projetos em Destaque",
      subtitle: "Veja alguns dos nossos trabalhos de gravação a laser realizados",
      items: [
         { src: img1, alt: "Porfólio Gravação a Laser" },
         { src: img2, alt: "Porfólio Gravação a Laser" },
         { src: img3, alt: "Porfólio Gravação a Laser" },
         { src: img4, alt: "Porfólio Gravação a Laser" },
         { src: img5, alt: "Porfólio Gravação a Laser" },
         { src: img6, alt: "Porfólio Gravação a Laser" },
         { src: img7, alt: "Porfólio Gravação a Laser" },
         { src: img8, alt: "Porfólio Gravação a Laser" },
         { src: img9, alt: "Porfólio Gravação a Laser" },
         { src: img10, alt: "Porfólio Gravação a Laser" },
         { src: img11, alt: "Porfólio Gravação a Laser" },
      ],
   },
   benefits: {
      title: "Benefícios da Gravação a Laser",
      items: [
         {
            icon: "heroicons:viewfinder-circle",
            title: "Precisão nos detalhes",
            description:
               "Reprodução nítida de logos, códigos, descrições, datadores, QR Codes e marcações técnicas.",
         },
         {
            icon: "heroicons:shield-check",
            title: "Marcação permanente",
            description:
               "Gravação permanente, garantindo leitura durável em ambientes severos e de alto desgaste.",
         },
         {
            icon: "heroicons:arrows-pointing-out",
            title: "Todos os portes",
            description:
               "Desde pequenos postiços até ferramentais industriais de 100 toneladas.",
         },
         {
            icon: "heroicons:sparkles",
            title: "Versátil",
            description:
               "Gravação para identificação industrial ou para personalização de produtos.",
         },
      ],
   },


   applications: {
      badge: "Aplicações",
      title: "Onde a gravação a laser é mais utilizada?",
      image: imgApplication,
      items: [
         {
            title: "Matrizarias e ferramentarias",
            description:
               "Gravações técnicas para identificação de cavidades, referências e informações em geral, garantindo alta qualidade e respeito ao posicionamento dos projetos.",
         },
         {
            title: "Usinagem e ferramentarias de precisão",
            description:
               "Marcação de postiços, dispositivos, insertos e peças metálicas com códigos, datadores e especificações técnicas.",
         },
         {
            title: "Fabricantes de máquinas e equipamentos",
            description:
               "Identificação permanente de painéis, botões, dispositivos, peças técnicas, números de série e instruções operacionais.",
         },
         {
            title: "Setor automotivo",
            description:
               "Rastreabilidade de peças, marcações de segurança, códigos industriais e gravações de alta precisão em componentes metálicos.",
         },
         {
            title: "Indústrias de plásticos e metais",
            description:
               "Identificação de moldes, matrizes, insertos e componentes expostos a desgaste, temperatura e processos repetitivos.",
         },
         {
            title: "Branding e personalização de produtos",
            description:
               "Gravação de marcas, logos e identidades visuais em peças, acessórios e componentes para agregar valor ao produto.",
         },
         {
            title: "Equipamentos especiais ou sob medida",
            description:
               "Gravações customizadas para instruções técnicas, marcações operacionais, QR Codes e informações obrigatórias.",
         },
      ],
   },


   faq: {
      badge: "Dúvidas",
      title: "Perguntas frequentes",
      intro: "Entenda como funciona o processo de gravação a laser da Gravasteel.",
      items: [
         {
            question:
               "O atendimento é feito na Gravasteel ou nas instalações do cliente?",
            answer:
               "Realizamos gravações em nossa estrutura em Caxias do Sul ou diretamente no cliente, conforme o porte e a complexidade das peças.",
         },
         {
            question: "Quais materiais podem ser gravados a laser?",
            answer:
               "Gravamos em aços temperados, inox, alumínio, latão, cobre e outras ligas metálicas. O processo é ajustado conforme dureza e composição do material.",
         },
         {
            question: "Existe limitação de tamanho para as peças?",
            answer:
               "Nossa estrutura permite gravações em peças pequenas até ferramentais de grande porte. Na sede, atendemos peças de até 500 kg; acima desse peso, o serviço é realizado diretamente no cliente.",
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
