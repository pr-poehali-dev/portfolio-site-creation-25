import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Redesign',
      category: 'UI/UX',
      image: 'https://cdn.poehali.dev/projects/45a3664c-b47c-4800-b968-924633712c3e/files/5c42c200-057c-4228-88c8-8df422e43c6c.jpg',
      description: 'Полный редизайн интернет-магазина с фокусом на UX'
    },
    {
      id: 2,
      title: 'Creative Portfolio',
      category: 'Web Design',
      image: 'https://cdn.poehali.dev/projects/45a3664c-b47c-4800-b968-924633712c3e/files/676fe0db-1789-4ee2-8be2-837773b7c696.jpg',
      description: 'Минималистичное портфолио для креативного агентства'
    },
    {
      id: 3,
      title: 'Mobile App UI',
      category: 'UI/UX',
      image: 'https://cdn.poehali.dev/projects/45a3664c-b47c-4800-b968-924633712c3e/files/4e8a447c-ae0c-48ac-a42e-155c7663fb71.jpg',
      description: 'Дизайн мобильного приложения для фитнес-трекера'
    }
  ];

  const skills = [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 90 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Prototyping', level: 88 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Typography', level: 93 }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gradient">Designer</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'works', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'skills' && 'Навыки'}
                  {section === 'works' && 'Работы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <Badge variant="outline" className="text-sm px-4 py-2 mb-4">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Доступен для новых проектов
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient">Веб-дизайнер</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаю современные и функциональные дизайны, которые решают бизнес-задачи и радуют пользователей
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('works')} className="group">
                Смотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Привет! Я начинающий веб-дизайнер с огромной страстью к созданию красивых и функциональных интерфейсов. 
                Я верю, что хороший дизайн — это не просто про красоту, а про решение реальных проблем пользователей.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Каждый проект для меня — это возможность учиться чему-то новому и создавать продукты, 
                которые делают жизнь людей проще и приятнее.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="card-gradient border-border p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name="Lightbulb" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Креативность</h3>
                      <p className="text-muted-foreground">
                        Нестандартные решения для уникальных задач
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Icon name="Users" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Пользователи в центре</h3>
                      <p className="text-muted-foreground">
                        Всегда думаю о том, как сделать опыт лучше
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Icon name="Zap" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Скорость и качество</h3>
                      <p className="text-muted-foreground">
                        Быстрая работа без компромиссов в качестве
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Навыки</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Инструменты и технологии, которыми я владею
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Мои работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Проекты, которыми я горжусь
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in border-border"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <Badge className="mb-2">{project.category}</Badge>
                      <p className="text-white text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="text-sm">Подробнее</span>
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4">Свяжитесь со мной</h2>
              <p className="text-xl text-muted-foreground">
                Готов обсудить ваш проект или просто поболтать о дизайне
              </p>
            </div>
            <Card className="card-gradient border-border p-8 animate-scale-in">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button size="lg" className="w-full group">
                  Отправить сообщение
                  <Icon name="Send" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Designer. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Project detail"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
