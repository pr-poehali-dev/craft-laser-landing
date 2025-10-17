import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ab4a905a-cfda-4ccd-8799-8eb84bc74f51.jpg",
      title: "Деревянные шкатулки",
      category: "Подарки"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3a9e7941-88d9-40eb-aa8b-190ba81ac484.jpg",
      title: "Декоративные панели",
      category: "Интерьер"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/6cd30efc-fcef-4b52-a264-eda428b4f43c.jpg",
      title: "Корпоративные сувениры",
      category: "Бизнес"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ef227ba0-3db7-4e53-a0b8-330ed78fce29.jpg",
      title: "Кожаные изделия",
      category: "Аксессуары"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3b962bd8-0d10-4a83-8469-9b440aaa4648.jpg",
      title: "Свадебные приглашения",
      category: "Свадьба"
    },
    {
      image: "https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/ab4a905a-cfda-4ccd-8799-8eb84bc74f51.jpg",
      title: "Мебельные элементы",
      category: "Мебель"
    }
  ];

  const services = [
    {
      icon: "Zap",
      title: "Лазерная резка",
      description: "Высокоточная резка дерева, фанеры, акрила, кожи и металла"
    },
    {
      icon: "Sparkles",
      title: "Гравировка",
      description: "Детальная гравировка логотипов, текстов и изображений"
    },
    {
      icon: "Palette",
      title: "Индивидуальный дизайн",
      description: "Разработка уникального дизайна под ваши идеи"
    },
    {
      icon: "Package",
      title: "Малые серии",
      description: "Производство от 1 до 1000 единиц продукции"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Заказывала декоративные панели для кафе. Результат превзошёл ожидания! Качество на высоте, сроки соблюдены.",
      rating: 5
    },
    {
      name: "Михаил Сидоров",
      text: "Ребята сделали потрясающие свадебные приглашения с гравировкой. Гости до сих пор в восторге!",
      rating: 5
    },
    {
      name: "Елена Новикова",
      text: "Профессиональный подход, внимание к деталям. Рекомендую всем, кто ценит качество и креатив.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/ff67840e-abbd-49b2-bb1a-dc4200874680/files/3b962bd8-0d10-4a83-8469-9b440aaa4648.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Крафтовая студия<br />лазерной резки
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Превращаем ваши идеи в уникальные изделия из дерева, акрила, металла и кожи
          </p>
          <Button size="lg" className="text-lg px-10 py-6">
            Заказать проект
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary mb-2 font-medium">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center p-8 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in border-border" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Отзывы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 animate-scale-in border-border hover:shadow-lg transition-all" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Мастеров, д. 15</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@lasercraft.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00<br />Сб-Вс: по записи</p>
                </div>
              </div>
            </div>
            
            <Card className="p-8 animate-scale-in border-border" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Телефон" />
                <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                <Button className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Крафтовая студия лазерной резки</h3>
            <p className="text-muted-foreground">Превращаем идеи в реальность</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <Icon name="Instagram" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
            <Icon name="Facebook" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
            <Icon name="Mail" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" size={24} />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Laser Craft Studio. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
