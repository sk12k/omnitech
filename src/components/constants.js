export const coursesData = [
  {
    title: "DevOps",
    desc: "DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary to agile software development; several DevOps aspects came from the agile way of working.",
    components: [
      { title: "GIT / SVN", desc: "Git is a distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.  SVN is distributed as open source, and its model utilizes a centralized version control system, meaning all information and files are stored on a central server. " },
      { title: "Jenkins / Gitlab", desc: "Jenkins helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.  GitLab, a DevOps software package that combines the ability to develop, secure, and operate software in a single application. " },
      { title: "Ansible/Chef/Puppet", desc: "Ansible is a suite of software tools that enables infrastructure as code. Chef - When there is a failure on the primary server i.e. chef server, it has a backup server to take the place of the primary server.  Puppet has multi-master architecture, if the active master goes down, the other master takes the active master place." },
      { title: "Terraform", desc: "Terraform is an IAC tool, used primarily by DevOps teams to automate various infrastructure tasks." },
      { title: "Nagios", desc: "Nagios is an open source monitoring system for computer systems. It was designed to run on the Linux operating system and can monitor devices running Linux, Windows and Unix operating systems (OSes)." },
    ],
    image: "devops1.jpeg",
  },
  {
    title: "Cloud",
    desc: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.",
    components: [
      { title: "AWS", desc: "AWS is designed to allow application providers, ISVs, and vendors to quickly and securely host your applications – whether an existing application or a new SaaS-based application. " },
      { title: "Azure", desc: "Microsoft Azure, formerly known as Windows Azure, is Microsoft's public cloud computing platform. It provides a broad range of cloud services, including compute, analytics, storage and networking." },
      { title: "GCP", desc: "The Google Cloud console provides a web-based, graphical user interface that you can use to manage your Google Cloud projects and resources." },
      { title: "Open Shift", desc: "Red Hat OpenShift is a cloud-based Kubernetes platform that helps developers build applications. It offers automated installation, upgrades, and life cycle management throughout the container stack — the operating system, Kubernetes and cluster services, and applications — on any cloud." },
    ],
    image: "cloud.jpeg",
  },
  {
    title: "AI/ML",
    desc: "Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by animals and humans. Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. ",
    components: [
      { title: "Tableau", desc: "Tableau products query relational databases, online analytical processing cubes, cloud databases, and spreadsheets to generate graph-type data visualizations." },
      { title: "NLP", desc: "Natural language processing (NLP) refers to the branch of computer science—and more specifically, the branch of artificial intelligence or AI—concerned with giving computers the ability to understand text and spoken words in much the same way human beings can." },
      { title: "Python", desc: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems." },
    ],
    image: "aiml.jpeg",
  },
];
