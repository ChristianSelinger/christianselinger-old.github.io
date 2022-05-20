// Formatting
//-----------------------------------------------------
const OUTPUT_STRING = "  ";

var glow = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function (text) {
  return "[[u;inherit;]" + text + "]";
};

function teal(message) {
  return "[[gb;teal;black]" + message + "]";
}
//-----------------------------------------------------

var banner = teal(
  "-----------------------------------------------------------------------------\n|\t\t	Christian Selinger, PhD - Infectious Disease Modeling   \t\t|\n-----------------------------------------------------------------------------\n"
) ;

const menuMessage =`For further navigation, please type 'menu' or press [tab] to autocomplete.
Type 'clear' to clean up your screen.
Use the shortcuts [Ctrl +/-] to zoom in/out.

`;

const welcomeMessage = `
Welcome to my personal webpage!

I enjoy bringing together methods from statistics, mathematics and computer science 
to better understand ${teal("infectious disease dynamics")}, both at the intra-host and population level. 

I am particularly interested how ${teal("immune responses")} following natural infection 
or ${teal("vaccination")} shape infection dynamics and effectiveness of ${teal("public health")} interventions.

So far, I have worked mainly on ${teal("human pathogens")}: HIV, Influenzavirus, Coronavirus, Poliovirus, HPV.
`;
// Boolean to keep track of whether Star Wars is animating
var play = false;



function publication_query(){


	if (window.DOMParser) {
   	xmlDoc = new DOMParser();
	xmlDoc = parser.parseFromString("docs/europepmc.xml", "text/xml");
	} else {    // IE 5/6
    	xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    	xmlDoc.async = false;
    	xmlDoc.loadXML("docs/europepmc.xml");
	}


	title = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

	return title;

}


function random_quotation(){
  var quotations = [
    'While the researcher is searching for things, the magician makes them appear. --Comoé S.',
    //'Love your friends as if you would some day hate them. --Bias of Priene',
    'The secret to modeling is not being perfect. --Karl Lagerfeld',
    //'He who wants to get to the source must swim against the current. --Stanislaw Jerzy Lec',
    'Never turn your back on reality, it surrounds you. --Stanislaw Jerzy Lec',
    'When reasons are weak, attitudes stiffen. --Stanislaw Jerzy Lec',
    'It is vain to do with more what can be done with fewer. --William of Occam',
    'Young people need models, not critics. --Coach John Wooden',
    //'Często dach nad głową nie pozwala ludziom rosnąć. --Stanisław Jerzy Lec',
    'Bada się głębię, rzucając w nią kamieniem. --Stanisław Jerzy Lec',
    '[...] that seeds there be of many things to us life-giving, and that, contrariwise, there must fly many around bringing disease and death. --Lucretius',
    //'Pour le coq, le poulailler est un palais doré, malgré la puanteur des lieux. --proverbe Akan',
    'There are no answers, only choices. --Stanislaw Lem',
    'The future influences the present just as much as the past. --Friedrich Nietzsche'
	];
  return quotations[Math.floor(Math.random()*quotations.length)];
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

// Just a little helper function so I don't have to continually update my age
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getDate() {
  var today = new Date();
  return today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
}

function setURL(name,url){
	var string=name;
	return string.link(url);
};

const messages = {
  repo: `
`,
  menu: `
Type any of the commands below to get some more info, or press [tab] to discover more.
${OUTPUT_STRING}${glow("about")}              - Welcome
${OUTPUT_STRING}${glow("topics")}           - Current and future research topics
${OUTPUT_STRING}${glow("publications")}       - Selected publications
${OUTPUT_STRING}${glow("data")}       	      - Publicly available data
${OUTPUT_STRING}${glow("preprints")}          - Manuscripts under review
${OUTPUT_STRING}${glow("biblio")}             - Download my bibliography (.bib)
${OUTPUT_STRING}${glow("fun")}                - Fun quotations on modeling
${OUTPUT_STRING}${glow("cv")}                 - Download my CV (.pdf)
${OUTPUT_STRING}${glow("contact")}            - Bring on the spam
${OUTPUT_STRING}${glow("coauthors")}          - People I learned from
${OUTPUT_STRING}${glow("classics")}           - Highly cited, rarely read

`,
  self: `${banner}

${teal("Selbstverständnis")}

Infectious disease modeling is very much a human activity. Parameterizing phenomological descriptions of disease
with the help of mathematical functions or computer code requires many implicit and explicit choices.

At the core of each infectious disease model is the contagion process. Therein infectious individuals 
act as catalysts upon substrates, the susceptible individuals. The product of this reaction is another
infectious individual, and the reaction continues until an equilibrium state is reached.

Structuring the contagion process follows three major axes: 
* ${OUTPUT_STRING}${glow("time")}: Does the next reaction depend not only on the present but also past states of the system?
* ${OUTPUT_STRING}${glow("host")}: Does a host's age, immunity, position in space/network, and mobility determine the coupling of catalyst and substrate?
* ${OUTPUT_STRING}${glow("pathogen")}: How do genetics, antigenicity and phenotype of the pathogen modulate the strength of the reaction?
`,
/*
Epidemiological observations are often spurious, 
A good fit of a model to measurements such as disease prevalence is only 

Idealistically, one would hope to use models to perform parameter inference, and to make accurate predictions in order 
to improve population health. Understanding why certain underlying assumptions
make a model work or not should already be considered an achievement. 
*/
  fun:
random_quotation
,
  glossary: `
glossary
`,
  membership: `${banner}

${teal("Membership")}

Verein Gedenkdienst${OUTPUT_STRING}https://gedenkdienst.at
Naturfreunde${OUTPUT_STRING}https://naturfreunde.at
Médecins Amis des Malades Afrique${OUTPUT_STRING}http://www.medamafrique.org
`,
  about:` ${banner}

Welcome to my personal webpage!

I enjoy bringing together methods from statistics, mathematics and computer science 
to better understand ${teal("infectious disease dynamics")}, both at the intra-host and population level. 

I am particularly interested how ${teal("immune responses")} following natural infection 
or ${teal("vaccination")} shape infection dynamics and effectiveness of ${teal("public health")} interventions.

So far, I have worked mainly on ${teal("human pathogens")}: HIV, Influenzavirus, Coronavirus, Poliovirus, HPV 
`,


  preprints: `${banner}

${teal("Preprints")}

Tessandier N, Uysal BI, Elie B, Selinger C, Bernat C, Boué V, Grasset S, Groc S, Kamiya T, Reyné B, Bender N, Bonneau M, Graf C, Tribout V, Foulongne V, Ravel J, Waterboer T, Hirtz C, Bravo IG, Reynes J, Segondy M, Murall CL, Boulle N, Alizon S: ${OUTPUT_STRING}${glow("Increased risk of fungal infection detection in women using menstrual cups vs tampons")} ${OUTPUT_STRING} https://doi.org/10.1101/2021.12.10.21267584
`,

  pgp: `
my key
`,
  data: `${banner}

${teal("Data")}

Human contact network analytics and COVID-19 hospital incidence in France.${OUTPUT_STRING}https://doi.org/10.5281/zenodo.5207324

Cytokine response following perturbation of the cervicovaginal milieu during HPV genital infection.${OUTPUT_STRING}https://doi.org/10.5281/zenodo.4701171
`,
  resume: `${banner}

${teal("Resume")}

${glow("2021-present:")} Senior Scientific Collaborator at Swiss TPH, Switzerland

${glow("2019-present:")} Research Scientist at IRD, France (tenured, currently on leave)

${glow("2017-2019:")} PostDoc at Cnrs, France

${glow("2014-2017:")} Research Scientist at Institute for Disease Modeling, USA

${glow("2012-2014:")} PostDoc at University of Washington, USA

${glow("November 8, 2010")} PhD in mathematics at Université du Luxembourg, Luxembourg


`,
 topics: `${banner}

${teal("Topics")}

I am currently working on Malaria modeling for public health.
`,
  publications: `${banner}

${teal("Selected recent publications")}

${OUTPUT_STRING}${glow("The source of individual heterogeneity shapes infectious disease outbreaks")}
Royal Scociety B 2022 (accepted) ${OUTPUT_STRING} https://doi.org/10.1098/rspb.2022.0232

${OUTPUT_STRING}${glow("Non-Markovian modelling highlights the importance of age structure on Covid-19 epidemiological dynamics.")}
Math. Model. Nat. Phenom. 2022 ${OUTPUT_STRING} https://dx.doi.org/10.1051/mmnp/2022008
	
${OUTPUT_STRING}${glow("Epidemiological and clinical insights from SARS-CoV-2 RT-PCR cycle amplification values.")}
Eurosurveillance 2022 ${OUTPUT_STRING} https://doi.org/10.2807/1560-7917.ES.2022.27.6.2100406
	
${OUTPUT_STRING}${glow("Reconstructing contact network structure and cross-immunity patterns from multiple infection histories.")} 
PLoS Comp Bio 2021 ${OUTPUT_STRING} https://doi.org/10.1371/journal.pcbi.1009375

${OUTPUT_STRING}${glow("Episome partitioning and symmetric cell divisions: quantifying the role of random events in the persistence of HPV infections.")} 
PLoS Comp Bio 2021 ${OUTPUT_STRING} https://doi.org/10.1371/journal.pcbi.1009352

${OUTPUT_STRING}${glow("Predicting COVID-19 incidence in French hospitals using human contact network analytics.")} 
International Journal of Infectious Diseases 2021 ${OUTPUT_STRING} https://doi.org/10.1016/j.ijid.2021.08.029

${OUTPUT_STRING}${glow("Cytokine response following perturbation of the cervicovaginal milieu during HPV genital infection.")}
Immunological Research 2021 ${OUTPUT_STRING} https://link.springer.com/article/10.1007/s12026-021-09196-2

${OUTPUT_STRING}${glow("Targeting and Vaccine Durability Are Key for Population-level Impact and Cost-Effectiveness of a Pox-Protein HIV Vaccine Regimen in South Africa")} 
Vaccine 2019 ${OUTPUT_STRING} https://doi.org/10.1016/j.vaccine.2019.02.073

${OUTPUT_STRING}${glow("Assessing the stability of polio eradication after the withdrawal of oral polio vaccine")}
PLoS Biology 2018 ${OUTPUT_STRING} https://doi.org/10.1371/journal.pbio.2002468

${OUTPUT_STRING}${glow("Cytokine systems approach demonstrates differences in innate and pro-inflammatory host responses between genetically distinct MERS-CoV isolates.")}
BMC Genomics 2014. ${OUTPUT_STRING} https://doi.org/10.1186/1471-2164-15-1161

`,
/*
  skills: `
${OUTPUT_STRING}${glow(
    "Kotlin"
  )}             ##  [[g;#00DE12;]#################################################]  ##
${OUTPUT_STRING}${glow(
    "Java"
  )}               ##  [[g;#42D100;]###############################################]    ##
${OUTPUT_STRING}${glow(
    "C# & C++"
  )}           ##  [[g;#5BD100;]############################################]       ##
${OUTPUT_STRING}${glow(
    "Python"
  )}             ##  [[g;#D16200;]###########]                                        ##
${OUTPUT_STRING}${glow(
    "GCP"
  )}                ##  [[g;#99D100;]#########################################]          ##
${OUTPUT_STRING}${glow(
    "Web Dev"
  )}            ##  [[g;#D1B900;]############################]                       ##
`,
*/
  contact:`${banner}

${teal("Contact")}

${OUTPUT_STRING}${glow("Email")}            - christian.selinger AT {swisstph.ch,protonmail.com,gmail.com}
${OUTPUT_STRING}${glow("orcid")}            -${OUTPUT_STRING}https://orcid.org/0000-0002-4361-549X

`,
  coauthors: `${banner}

${teal("Coauthors")}

${OUTPUT_STRING}${glow("Samuel Alizon")}         - Cnrs (France):${OUTPUT_STRING}http://alizon.ouvaton.org/
${OUTPUT_STRING}${glow("Anna Bershteyn")}   	    - NYU (USA):${OUTPUT_STRING}https://med.nyu.edu/faculty/anna-bershteyn
${OUTPUT_STRING}${glow("Mike Famulare")}   	    - IDM (USA):${OUTPUT_STRING}https://www.idmod.org/team#MikeFamulare-2-biography
${OUTPUT_STRING}${glow("Marc Choisy")}   	    - Oxford University (Vietnam):${OUTPUT_STRING}http://marcchoisy.free.fr/

`,
  classics: `${banner}

${teal("Classics")}

Kermack WO and McKendrick AG:${OUTPUT_STRING}${glow("A Contribution to the Mathematical Theory of Epidemics.")} Proc Royal Soc 1927${OUTPUT_STRING}https://royalsocietypublishing.org/doi/10.1098/rspa.1927.0118

Schrödinger E:${OUTPUT_STRING}${glow("Ueber die Umkehrung der Naturgesetze.")} Sitzungsber. der Preuss. Akad. d. Wissensch. 1931${OUTPUT_STRING}http://leonard.perso.math.cnrs.fr/papers/1931-Schroedinger-Ueber%20die%20Umkehrung%20der%20Naturgesetze.pdf

Arnol'd V:${OUTPUT_STRING}${glow("On the representation of continuous functions of several variables as superpositions of continuous real functions of one variable and addition")} Doklady 1957${OUTPUT_STRING}https://cs.uwaterloo.ca/~y328yu/classics/Kolmogorov57.pdf

Lamport L, Shostak R and Pease M:${OUTPUT_STRING}${glow("The Byzantine Generals Problem")} ACM Transactions on Programming Languages and Systems 1982${OUTPUT_STRING}https://lamport.azurewebsites.net/pubs/byz.pdf

Kurtz T: ${OUTPUT_STRING}${glow("Solutions of ordinary differential equations as limits of pure jump markov processes")} JAP 1970 ${OUTPUT_STRING}https://doi.org/10.2307/3212147

Maynard Smith J, Price GR:${OUTPUT_STRING}${glow("The Logic of Animal Conflict")} Nature 1973${OUTPUT_STRING}https://etherplan.com/the-logic-of-animal-conflict.pdf

Price GR:${OUTPUT_STRING}${glow("Selection and Covariance")} Nature 1970${OUTPUT_STRING}http://www0.cs.ucl.ac.uk/staff/W.Langdon/ftp/papers/price_nature.pdf

`,
  credits: `${banner}

${OUTPUT_STRING}Site built by ${glow("me")}
${OUTPUT_STRING}Using ${glow("JQuery Terminal Emulator")} by ${glow(
    "Jakub Jankiewicz"
  )} (http://terminal.jcubic.pl)
${OUTPUT_STRING}Self-hosted via a LAMP server
`,
  wordcloud: `${banner}

|\t${glow("wordcloud from abstracts")}
|  - 
|  - 
`,
 me: `${banner}

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&(*%&&&&&@&@&&@@&@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@&&&&%%#(%%#(***/*/%&&&&&%%%%&&&&&&&&@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@&%%#/********,,...,.,******///(#%&&&&&&&&&@@@@@@@@@@@@&@@
@@@@@@@@@@@@@@@@@@@@@&&#((///*****,,,,,,.,.,,**(/,.,,,**//#%&&&&&&@&@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@&&&%#///***,,,..,.*    ..,//****,,,*//*,,**/#%&&&&&@@@@@@@@@@@
@@@@@@@@@@@@@@@&&&&#///*****,..... .*,,,,*//**////////((/((/*/(%%&&&&&&&@@@@@@@@
@@@@@@@@@@@@@@&&&&#*/**********,,...,,*/////********//***/*,,,**(&&&&&&&@@@@@@@@
@@@@@@@@@@@@@&&%/*(/****/////////////((/////////*////////**//**,,*//(%&@@@@@@@@@
@@@@@@@@@@@@@&#///////(((((((((((((((#####(((((((//(/(((((//*****,*##%%&&@@&@@@@
@@@@@@@@@@@&&%///**//(((((((((((((###############((((((((((/**//*.*/#%&&@&&@@@&@
@@@@@@@@@@&&&#//////((((((##############################((((((///(/,/%&&&@@&&&@@
@@@@@@@@@@&&%//////(((((((((((((###########################((((////*/%&&&&&&@@@@
@@@@@@&&&&&&%//*//(((((((((((##############################((((//*/**%&&&&&&&&&@
@@@@@@&&&&&&%///*/((((((((########%%%%%%%%%%%%###########((((((/**///%&&&&&&&&&@
@@@@@@&&&&&&%///*(((((((((((((####%%%%%%%%%%%%########(((#(((((/**/*(&&&&&&&&&&@
@@@&@&&&&&&&%#/**((((((((((#((//((##%%%%%%%####(/****/((((((#(((***/%&&&&&&&&&&@
@@@&&&&&&&&&%%(**((((((##########(((########(((((((#######(((#(/,*/#%&&&&&&&&&&@
@@&&&&&&&&&&%%(*/((##((/*#/,,,((/(#(((#####((((///*,,,///((((((/*/(%%%&&&&&&&&&@
@@&&&&&&&&&&&(/*/((###(###(((#(((##((((((((((((((((//(#(((((###/*/(%%&&&&&&&&&&@
@@@&&&&&&&&&&(/*/(((#############(((((((((((((((###############/*/(#%&&&&&&&&&&@
@@&&&&&&&&&&%((*/((((############(((((((((((((((##############((/(#(%&&&&&&&&&&@
@@&&&&&&&&&&%(((((((((###########((((((##(((((((#############(((((##%&&&&&&&&&&@
@&&&&&&&&&&&%((/((((((((#########(((((##%##(((((############(((((((#%&&&&&&&&&&@
@@&&&&&&&&&&&#(##((((############(((*/###((//(/(########((((((((###%%&&&&&&&&&&@
@&&&&&&&&&&&&%#((((((((#######((((((//////((((((((((###((##(((((##%%%&&&&&&&&&&@
@&&&&&&&&&&&&%%%%%#(((((####((((((((((((((((((((((((((#####(((###%%%%&&&&&&&&&&@
@&&&&&&&&&&&&%%%%%%(((((###(((((((((((((((((((((((((((#((#(((#%%%%%%%&&&&&&&&&&@
@&&&&&&&&&&&&%%%%%%#(((((((((((///////(///((//////(((((((((((#%%%%%%%&&&&&&&&&&@
@&&&&&&&&&&&&%%%%%%#(((((((((((((((((((((((((((((((((((((((((%%%%%%%%%&&&&&&&&&@
@&&&&&&&&&&&&%%%%%%#((((((((((((######(((((##((((((((((((((((%%%%%%%&%&&&&&&&&&@
@&&&&&&&&&&&&%%%%%%#(((((((((((((((#(((((((((((((((((((((((((%%%%%%%%%%%&&&&&&&@
@&&&&&&&&&&%%%%%%%%#(((((((((((((((((((##((((((((((((((((((((%%%%%%%%%%%%%%%%%%@
&&&&&%%%%%%%%%%%%%%#((((((((((((((((#(#####((((((((//(((((((#%%%%%%%%%%%%%%%%%%@
&&%%%%%%%%%%%%%%%%##(((((((((((((((((((((((((((((///(((((((((#%%%%%%%%%%%%%%%%%@
&%%%%%%%%%%%%%%%%%##(((((((((((((((((((((((((((((((((((#(((((#%%%%%%%%%%%%%%%%%@
&%%%%%%%%%%%%%%%%###(((((##((((((((###((((((((((((((((###(((((##%%%%%%%%%%%%%%%&
&%%%%%%%%%%%%%##(///(((((####################((((((((####((((/**/##%%%%%%%%%%%%&
&%%%%%%##(/****/(//(((((((###########%%%%################((((((/**,,*/(##%%%%%%&
&#(/*****,***/(((((((((((############%%%%%%###############(((((/***,******,***/%
(*,,,,,***,**(((((((((((###########%%%%%%%%%##############(((((****************%
#((//((((((((##%%%%##%%%%%%%%%%%%%&&&&&&&&&&%%%%%%%%%%%%%%%%%#(((((((((((((((((%
`
};

var commands = {
  menu: function () {
    this.echo(messages.menu);
  },

  repo: function () {
    this.echo(messages.repo);
  },

  about: function () {
    this.clear();
    this.echo(messages.about);
  },

  self: function () {
    this.clear();
    this.echo(messages.self);
  },

  me: function() {
    this.clear();
    this.echo(messages.me);
},

  publications: function () {
    this.clear();
    this.echo(messages.publications);
  },

  classics: function () {
    this.clear();
    this.echo(messages.classics);
  },

  data: function () {
    this.clear();
    this.echo(messages.data);
  },

  preprints: function () {
    this.clear();
    this.echo(messages.preprints);
  },

  coauthors: function () {
    this.clear();
    this.echo(messages.coauthors);
  },

  membership: function () {
    this.clear();
    this.echo(messages.membership);
  },

  fun: function () {
    this.clear();
    this.echo(messages.fun);
  },

  topics: function () {
    this.clear();
    this.echo(messages.topics);
  },

  contact: function () {
    this.clear();
    this.echo(messages.contact);
  },

  credits: function () {
    this.clear();
    this.echo(messages.credits);
  },

  cv: function () {
    downloadURI(
      "docs/resume_cselinger.pdf"
    );
  },

  resume: function () {
    this.clear();
    this.echo(messages.resume);
  },

  biblio: function () {
    downloadURI(
      "docs/bibliography20210803_cselinger.bib"
    );
  },

  clear: function () {
    this.clear();
    this.echo(banner);
    this.echo(menuMessage);
  },

};

//-----------------------------------------------------------

$(function () {
  var isTyping = false;
  function typed(finish_typing) {
    return function (term, message, delay) {
      isTyping = true;
      var prompt = term.get_prompt();
      var c = 0;
      if (message.length > 0) {
        term.set_prompt("");
        var interval = setInterval(function () {
          term.insert(message[c++]);
          if (c == message.length) {
            clearInterval(interval);
            // execute in next interval
            setTimeout(function () {
              // swap command with prompt
              finish_typing(term, message, prompt);
              isTyping = false;
            }, delay);
          }
        }, delay);
      }
    };
  }

  var typed_message = typed(function (term, message, prompt) {
    term.set_command("");
    term.echo(message);
    term.set_prompt(prompt);
  });

  $("body").terminal(commands, {
    greetings: banner,
    prompt: "> ",
    completion: true,
    checkArity: false,
    clear: false,

    onInit: function (term) {
      this.echo(welcomeMessage);
      typed_message(term, menuMessage, 0, function () {});
    },

    keydown: function (e) {        
      // ctrl-z - Stop Star Wars
      if (e.which == 90 && e.ctrlKey) {
        play = false;
        return false;
      }

      if (play) {
        return false;
      }

      if (isTyping) {
        return false;
      }
    },

    keypress: function (e, term) {
      console.log("keypress: " + e.which);
    },

    onFocus: function (term) {
      console.log("terminal has gained focus");
    },

    onBlur: function () {
      console.log("terminal has lost focus");
    },
  });
});


