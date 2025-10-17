import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ab4a905a-cfda-4ccd-8799-8eb84bc74f51.jpg",
      title: "Деревянные шкатулки",
      category: "Дерево"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3a9e7941-88d9-40eb-aa8b-190ba81ac484.jpg",
      title: "Акриловый декор",
      category: "Акрил"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/6cd30efc-fcef-4b52-a264-eda428b4f43c.jpg",
      title: "Металлические панели",
      category: "Металл"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ef227ba0-3db7-4e53-a0b8-330ed78fce29.jpg",
      title: "Кожаные изделия",
      category: "Кожа"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3b962bd8-0d10-4a83-8469-9b440aaa4648.jpg",
      title: "Подарочная упаковка",
      category: "Фанера"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ab4a905a-cfda-4ccd-8799-8eb84bc74f51.jpg",
      title: "Корпоративные подарки",
      category: "Дерево"
    }
  ];

  const services = [
    {
      icon: "Zap",
      title: "Лазерная резка",
      description: "Высокоточная резка дерева, металла, акрила и кожи на современном оборудовании"
    },
    {
      icon: "Sparkles",
      title: "Лазерная гравировка",
      description: "Детальная гравировка логотипов, текстов и изображений любой сложности"
    },
    {
      icon: "Hammer",
      title: "Столярные работы",
      description: "Индивидуальная обработка и сборка изделий с учётом всех пожеланий"
    }
  ];

  const testimonials = [
    {
      name: "Дмитрий Волков",
      text: "Заказывал корпоративные подарки для партнёров. Качество — на высшем уровне, все детали продуманы. Николай — настоящий профессионал!",
      rating: 5,
      platform: "Яндекс"
    },
    {
      name: "Мария Светлова",
      text: "Делала свадебные приглашения с гравировкой имён. Получилось невероятно красиво! Гости в восторге, а я до сих пор храню образец.",
      rating: 5,
      platform: "Авито"
    },
    {
      name: "Александр Громов",
      text: "Сотрудничаю с мастерской уже год. Всегда точно в срок, адекватные цены и внимание к деталям. Рекомендую всем!",
      rating: 5,
      platform: "Яндекс"
    }
  ];

  const blogPosts = [
    {
      title: "Как выбрать материал для лазерной резки",
      date: "15 октября 2024",
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3a9e7941-88d9-40eb-aa8b-190ba81ac484.jpg"
    },
    {
      title: "Процесс создания уникального подарка",
      date: "8 октября 2024",
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ab4a905a-cfda-4ccd-8799-8eb84bc74f51.jpg"
    },
    {
      title: "Секреты качественной гравировки",
      date: "1 октября 2024",
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/6cd30efc-fcef-4b52-a264-eda428b4f43c.jpg"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="parallax-element fixed top-20 right-20 w-32 h-32 opacity-20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="w-full h-full border-2 border-primary/30 rotate-45"></div>
      </div>
      <div 
        className="parallax-element fixed bottom-40 left-10 w-24 h-24 opacity-20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        <div className="w-full h-full border-2 border-primary/30 rounded-full"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3b962bd8-0d10-4a83-8469-9b440aaa4648.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-6xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Мастерская лазерной резки и&nbsp;гравировки, где простые материалы становятся уникальными подарками и&nbsp;авторскими изделиями
          </h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 mt-16">
            <div className="flex items-center gap-3 justify-center">
              <Icon name="DollarSign" className="text-primary" size={24} />
              <p className="text-muted-foreground">Без переплат — собственное оборудование</p>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Icon name="Lightbulb" className="text-primary" size={24} />
              <p className="text-muted-foreground">Без шаблонов — реализую ваши идеи</p>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Icon name="Package" className="text-primary" size={24} />
              <p className="text-muted-foreground">Без ограничений — от 1 шт. до оптовых партий</p>
            </div>
          </div>

          <Button size="lg" className="glow pulse-glow text-lg px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Рассчитать стоимость изготовления
          </Button>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Каждый заказ уникален — как и каждый клиент
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border/50 glow-hover transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-card/50 backdrop-blur-sm" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
              Перейти в портфолио
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative bg-gradient-to-br from-secondary to-background">
        <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3b962bd8-0d10-4a83-8469-9b440aaa4648.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
            Мастерская открыта для вас
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Здесь всё делается честно, руками и с душой
          </p>
          <Button size="lg" className="glow pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6">
            Посетить мастерскую
          </Button>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Я позабочусь о том, чтобы ваша идея стала реальностью
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center p-10 border-border/50 glow-hover transition-all hover:-translate-y-2 animate-fade-in bg-card/30 backdrop-blur-sm" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center glow">
                    <Icon name={service.icon} size={40} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow px-10">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Веду блог о том, как создаю свои работы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-border/50 glow-hover transition-all duration-500 hover:-translate-y-2 animate-scale-in bg-card/40 backdrop-blur-sm group" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary mb-3">{post.date}</p>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Николай Кондратенко
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Создаю уникальные изделия из дерева, металла, акрила и кожи с помощью лазерных технологий. 
                Каждый проект — это сочетание современных технологий и тепла ручной работы.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <p className="text-muted-foreground">Современное оборудование</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <p className="text-muted-foreground">Честные цены</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <p className="text-muted-foreground">Тепло ручной работы</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1" size={20} />
                  <p className="text-muted-foreground">Уникальные проекты</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/5d377b37-1338-40ad-8115-1c3ae74ebcb8.jpg" 
                alt="Николай Кондратенко" 
                className="rounded-lg glow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Тёплые слова тех, кто уже доверил мне свои идеи
          </h2>
          <div className="relative">
            <Card className="p-10 border-border/50 bg-card/40 backdrop-blur-sm glow-hover transition-all">
              <div className="flex mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} className="text-primary fill-primary" />
                ))}
                <span className="ml-4 text-primary font-semibold">{testimonials[activeTestimonial].platform}</span>
              </div>
              <p className="text-xl text-muted-foreground mb-8 italic leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>
              <p className="text-xl font-semibold">{testimonials[activeTestimonial].name}</p>
            </Card>
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-primary glow w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Свяжитесь со мной
          </h2>
          <Card className="p-10 border-border/50 bg-card/40 backdrop-blur-sm glow-hover">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Ваше имя" className="bg-background/50 border-border/50" />
                <Input type="email" placeholder="Email" className="bg-background/50 border-border/50" />
              </div>
              <Input type="tel" placeholder="Телефон" className="bg-background/50 border-border/50" />
              <Textarea placeholder="Расскажите о вашем проекте" rows={5} className="bg-background/50 border-border/50" />
              <Button className="w-full glow bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary border-t border-border/50 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">ШЕРВУДСКИЙ ЛЕС</h3>
              <p className="text-muted-foreground">Мастерская лазерной резки и гравировки</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@shervud.ru</p>
                <p>г. Москва, ул. Лесная, д. 10</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" className="text-muted-foreground hover:text-primary glow-hover transition-colors cursor-pointer" size={24} />
                <Icon name="Facebook" className="text-muted-foreground hover:text-primary glow-hover transition-colors cursor-pointer" size={24} />
                <Icon name="Mail" className="text-muted-foreground hover:text-primary glow-hover transition-colors cursor-pointer" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Шервудский Лес. Все права защищены. ИП Кондратенко Н.А. ИНН 7701234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
