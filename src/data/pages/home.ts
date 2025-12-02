// src/data/pages/home.ts
import img1 from "../../assets/images/portfolio/gravasteel-portfolio-01.webp";
import img2 from "../../assets/images/portfolio/gravasteel-portfolio-08.webp";
import img3 from "../../assets/images/portfolio/gravasteel-portfolio-03.webp";
import img4 from "../../assets/images/portfolio/gravasteel-portfolio-04.webp";
import img5 from "../../assets/images/portfolio/gravasteel-portfolio-11.webp";
import img6 from "../../assets/images/portfolio/gravasteel-portfolio-06.webp";
import img7 from "../../assets/images/portfolio/gravasteel-portfolio-17.webp";
import img8 from "../../assets/images/portfolio/gravasteel-portfolio-08.webp";
import img9 from "../../assets/images/portfolio/gravasteel-portfolio-09.webp";
import img10 from "../../assets/images/portfolio/gravasteel-portfolio-10.webp";
import img11 from "../../assets/images/portfolio/gravasteel-portfolio-19.webp";
import img12 from "../../assets/images/portfolio/gravasteel-portfolio-14.webp";
import img13 from "../../assets/images/portfolio/gravasteel-portfolio-12.webp";

import logo from "../../assets/images/logo-gravasteel.webp";
import IconWhatsapp from "../../assets/icons/brand-whatsapp.svg";

export const pageData = {
 
  navbarMenu: {
      logo, 
      links: [
         { href: "/#servicos", text: "Serviços" },
         { href: "/#diferenciais", text: "Diferenciais" },
         { href: "/#portfolio", text: "Portfolio" },
         { href: "/#clientes", text: "Clientes" },
         { href: "/#sobre", text: "Sobre" },
         { href: "/#faq", text: "FAQ" },
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
      subtitle: "Veja alguns dos nossos melhores trabalhos realizados",
      items: [
         { src: img1, alt: "Portfólio Gravasteel"},
         { src: img2, alt: "Portfólio Gravasteel"},
         { src: img3, alt: "Portfólio Gravasteel"},
         { src: img4, alt: "Portfólio Gravasteel"},
         { src: img5, alt: "Portfólio Gravasteel"},
         { src: img6, alt: "Portfólio Gravasteel"},
         { src: img7, alt: "Portfólio Gravasteel"},
         { src: img8, alt: "Portfólio Gravasteel"},
         { src: img9, alt: "Portfólio Gravasteel"},
         { src: img10, alt: "Portfólio Gravasteel"},
         { src: img11, alt: "Portfólio Gravasteel"},
         { src: img12, alt: "Portfólio Gravasteel"},
         { src: img13, alt: "Portfólio Gravasteel"},
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
         {
            question: "A gravação a laser substitui processos químicos ou mecânicos?",
            answer:
               "Sim. A gravação a laser é uma alternativa mais limpa, rápida e precisa aos métodos de corrosão química e gravações mecânicas, reduzindo custos e tempo de parada.",
         },
         {
            question: "Qual é o prazo médio de execução?",
            answer:
               "Os prazos variam conforme a complexidade do projeto, mas na maioria dos casos a gravação é concluída em poucas horas, com possibilidade de agendamento antecipado.",
         },
      ],
   },

   footer: {
      menu: [
         { href: "/#servicos", text: "Serviços" },
         { href: "/#diferenciais", text: "Diferenciais" },
         { href: "/#portfolio", text: "Portfolio" },
         { href: "/#clientes", text: "Clientes" },
         { href: "/#sobre", text: "Sobre a Gravasteel" },
         { href: "/#faq", text: "Perguntas Frequentes" },
      ],
   }
};
