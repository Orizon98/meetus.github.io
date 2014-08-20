module.exports = {

  prompts: false,

  outPath: './',

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Meet.us()",
      description: "Evento criado por programadores para programadores com objectivo de aproximar os desenvolvedores angolanos.",
      date: "13 de Setembro",
      // If your event is free, just comment this line
      price: "Grátis",
      venue: "IMETRO",
      address: "Rua da Total, Luanda, Angola",
      city: "Belas",
      state: "Morro Bento"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Registro",
        link: "http://www.eventzilla.net/web/event?eventid=2139033228"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/meetus/meetus.github.io"
    },*/

    // Site info
    site: {
      theme: "meetus",
      url: "http://meetus.github.io",
      googleanalytics: "UA-53892061-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      //'sponsors'
      'partners'
      //'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O EVENTO",
      location: "LOCALIZAÇÃO",
      speakers: "ORADORES",
      schedule: "PROGRAMA",
      sponsors: "APOIOS",
      partners: "PARCEIROS",
      contact: "CONTACTOS"
    },

    // The entire schedule
    schedule: [
      {
        name: "Apresentação",
        time: "14h00",
        title: "Apresentação do evento por Jo Cognitivo"
      },
      {
        name: "Sousa Gaspar",
        photo: "themes/meetus/img/sousa.jpg",
        bio: "Engenheiro da computação, atua como Desenvolvedor na http://SGenial.com.",
        company: "SGenial",
        link: {
          href: "mailto:sousa.gaspar@sgenial.com",
          text: "@email"
        },
        presentation: {
          title: "ORM com PHP do jeito certo.",
          description: "Que tal usar orientação a objectos em PHP para acessar e manipular dados do seu banco de dados relacional? Estabelecer correctamente a relação entre o modelo de objectos e o de dados é um desafio que frequentemente quebra a cabeça de muitos desenvolvedores, pois não raro embutir SQL no código gera confusão e dificulta a manutenção. Esta palestra vai lhe ajudar a se familiarizar com o conceito de ORM e conhecer as ferramentas e técnicas disponíveis para implementar o Mapeamento Objecto Relacional do jeito certo.",
          time: "15h00"
        }
      },
      {
        name: "Keven Chantre",
        photo: "themes/meetus/img/keven.jpg",
        bio: "Gamer e game dev, amante da ideologia indie, fascinado por química, astronomia e física quântica. Fundador da startup de desenvolvimento de jogos Interactive Load, co-organizador do AAC 2014",
        company: "Interactive Load",
        link: {
          href: "http://twitter.com/kevenchantre",
          text: "@kevenchantre"
        },
        presentation: {
          title: "O processo de desenvolvimento de jogos electrónicos",
          description: "Vamos aprender técnicas e ver como são desenvolvidos os jogos electrónicos, utilizando como exemplo jogos desenvolvidos pela Interactive Load.",
          time: "15h50"
        }
      },
      {
        name: "Mandela Morais",
        photo: "themes/meetus/img/mandela.jpg",
        bio: "Apaixonado por Web Design, formado em Redes no Hatfield Business College da Africa do Sul e focado no engradecimento do E-Commerce, E-Marketing e Infrastrutura para ISP angolanos.",
        company: "MandOsval",
        link: {
          href: "https://www.facebook.com/mandosvalceo",
          text: "fb.com/mandosvalceo"
        },
        presentation: {
          title: "E-Marketing, E-Commerce e Gestão de projectos.",
          description: "-",
          time: "16h40"
        }
      },
      {
        name: "Patrício dos Santos",
        photo: "themes/meetus/img/patricio.jpg",
        bio: "Estudante de Engenharia Informática atua profissionalmente como Programador/Desenvolvedor desde 2008. Trabalha com C# (para desenvolvimento Desktop), PHP e Ruby on Rails para Devenvolvimento Web. Nos últimos tempos tem dado uma vista de olhos no Java juntamente com o desenvolvimento mobile em Android e um pouco de Ajax e JQuery. Sempre que pode, também trabalha com infra. Servidores Linux e Windows (instalação, configuarção e manutenção).",
        company: "ITELnet S.A.",
        link: {
          href: "http://www.patriciodossantos.net/",
          text: "www"
        },
        presentation: {
          title: "Git - A ferramenta indispensável para qualquer desenvolvedor.",
          description: "O versionamento de código tornou-se tão fundamental no mundo de desenvolvimento de software que hoje é impensável trabalhar em multiplos projectos ou em um grupo sem a adoção desta prática. O Git é uma ferramenta que auxilia o processo de versionamento de códigos.",
          time: "17h30"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/meetus/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "AEISPTEC",
        logo: "themes/meetus/img/aeisptec.jpg",
        url: "https://www.facebook.com/AEISPTEC"
      },
      {
        name: "ADEIMA",
        logo: "themes/meetus/img/adeima.jpg",
        url: "https://www.facebook.com/pages/Associa%C3%A7%C3%A3o-dos-Estudades-Imetro-Adeima/166592990192970"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
