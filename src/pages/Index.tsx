import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-border/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center animate-neon-pulse">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold neon-text text-primary">
                ДиалогМастер
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-foreground hover:text-neon-cyan transition-colors">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white neon-border animate-neon-pulse">
                Начать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-magenta/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              Интеллектуальный ИИ
            </h2>
            <h3 className="text-5xl font-bold mb-8 neon-text text-primary">
              для всех задач
            </h3>
            <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
              Чат-ассистент нового поколения с возможностями обучения, творчества, 
              разработки игр и приложений. Ваш персональный помощник в цифровом мире.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white px-8 py-4 text-lg neon-border animate-neon-pulse hover:scale-105 transition-transform"
              >
                <Icon name="Rocket" size={24} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary px-8 py-4 text-lg hover:bg-primary/10"
              >
                <Icon name="Play" size={24} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 neon-text text-primary">
              Возможности платформы
            </h3>
            <p className="text-xl text-muted-foreground">
              Всё необходимое для работы, творчества и обучения в одном месте
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chat Assistant */}
            <Card className="glass p-8 hover:neon-border hover:border-neon-cyan transition-all duration-300 group animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center mb-6 group-hover:animate-neon-pulse">
                <Icon name="MessageSquare" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Чат-ассистент</h4>
              <p className="text-muted-foreground mb-4">
                Интеллектуальные диалоги с поддержкой контекста и персонализацией
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Многоязычная поддержка</li>
                <li>• Понимание контекста</li>
                <li>• Адаптация под стиль общения</li>
              </ul>
            </Card>

            {/* Game Development */}
            <Card className="glass p-8 hover:neon-border hover:border-neon-magenta transition-all duration-300 group animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-magenta to-neon-cyan flex items-center justify-center mb-6 group-hover:animate-neon-pulse">
                <Icon name="Gamepad2" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Создание игр</h4>
              <p className="text-muted-foreground mb-4">
                Разработка игр и приложений с готовыми шаблонами и кодом
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Генерация кода бесплатно</li>
                <li>• Современные анимации</li>
                <li>• Готовые компоненты</li>
              </ul>
            </Card>

            {/* Education */}
            <Card className="glass p-8 hover:neon-border hover:border-neon-blue transition-all duration-300 group animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta flex items-center justify-center mb-6 group-hover:animate-neon-pulse">
                <Icon name="GraduationCap" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Обучение</h4>
              <p className="text-muted-foreground mb-4">
                Интерактивные курсы по программированию, языкам и другим навыкам
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Персональные планы</li>
                <li>• Практические задания</li>
                <li>• Отслеживание прогресса</li>
              </ul>
            </Card>

            {/* Creative */}
            <Card className="glass p-8 hover:neon-border hover:border-neon-cyan transition-all duration-300 group animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center mb-6 group-hover:animate-neon-pulse">
                <Icon name="Lightbulb" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-primary">Творчество</h4>
              <p className="text-muted-foreground mb-4">
                Генерация идей, сценариев, рассказов и креативного контента
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Генерация историй</li>
                <li>• Творческие идеи</li>
                <li>• Сценарии и планы</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/5 via-transparent to-neon-blue/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                1M+
              </div>
              <p className="text-xl text-muted-foreground">Активных пользователей</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-magenta to-neon-cyan bg-clip-text text-transparent">
                50K+
              </div>
              <p className="text-xl text-muted-foreground">Созданных проектов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                99%
              </div>
              <p className="text-xl text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 neon-text text-primary">
              Интеграции
            </h3>
            <p className="text-xl text-muted-foreground">
              Подключение к внешним сервисам для максимальной эффективности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass p-8 text-center hover:neon-border hover:border-neon-blue transition-all duration-300">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 text-neon-blue" />
              <h4 className="text-xl font-bold mb-2 text-primary">Календарь</h4>
              <p className="text-muted-foreground">Синхронизация с Google Calendar и другими сервисами</p>
            </Card>
            
            <Card className="glass p-8 text-center hover:neon-border hover:border-neon-magenta transition-all duration-300">
              <Icon name="FileText" size={48} className="mx-auto mb-4 text-neon-magenta" />
              <h4 className="text-xl font-bold mb-2 text-primary">Заметки</h4>
              <p className="text-muted-foreground">Работа с Notion, Obsidian и другими системами заметок</p>
            </Card>
            
            <Card className="glass p-8 text-center hover:neon-border hover:border-neon-cyan transition-all duration-300">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-neon-cyan" />
              <h4 className="text-xl font-bold mb-2 text-primary">Поиск</h4>
              <p className="text-muted-foreground">Интеграция с поисковыми системами и базами данных</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-magenta/20 to-neon-cyan/20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-5xl font-bold mb-6 neon-text text-primary">
            Готовы начать?
          </h3>
          <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к миллионам пользователей, которые уже используют ДиалогМастер 
            для решения повседневных задач и реализации творческих идей
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-magenta text-white px-12 py-6 text-xl neon-border animate-neon-pulse hover:scale-105 transition-transform"
          >
            <Icon name="Sparkles" size={24} className="mr-3" />
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                  <Icon name="Brain" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-primary">ДиалогМастер</span>
              </div>
              <p className="text-muted-foreground">
                Ваш персональный ИИ-ассистент для всех задач
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-primary">Продукт</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-primary">Компания</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-primary">Поддержка</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ДиалогМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}