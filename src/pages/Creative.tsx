import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

export default function Creative() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const creativeTools = [
    {
      id: 'story',
      name: 'Генератор историй',
      description: 'Создавайте увлекательные рассказы и новеллы',
      icon: '📚',
      category: 'Литература',
      features: ['Разные жанры', 'Персонажи', 'Сюжетные повороты', 'Диалоги'],
      prompts: [
        'Фантастический рассказ о путешествии во времени',
        'Детективная история в викторианском Лондоне',
        'Романтическая комедия в космосе'
      ]
    },
    {
      id: 'script',
      name: 'Сценарий видео',
      description: 'Пишите сценарии для видео и презентаций',
      icon: '🎬',
      category: 'Видео',
      features: ['YouTube видео', 'Презентации', 'Рекламные ролики', 'Обучающие видео'],
      prompts: [
        'Сценарий обзора технологического продукта',
        'Презентация стартапа для инвесторов',
        'Обучающее видео по программированию'
      ]
    },
    {
      id: 'blog',
      name: 'Статьи и блоги',
      description: 'Создавайте контент для блогов и социальных сетей',
      icon: '✍️',
      category: 'Контент',
      features: ['SEO оптимизация', 'Разные стили', 'Соцсети', 'Новости'],
      prompts: [
        'Статья о последних трендах в ИИ',
        'Пост в Instagram о здоровом питании',
        'Обзор нового фильма для блога'
      ]
    },
    {
      id: 'poetry',
      name: 'Поэзия и лирика',
      description: 'Генерируйте стихи, песни и поэтические тексты',
      icon: '🎭',
      category: 'Поэзия',
      features: ['Разные размеры', 'Рифмы', 'Тематика', 'Настроение'],
      prompts: [
        'Романтичное стихотворение о весне',
        'Текст песни в стиле рок',
        'Философские размышления в стихах'
      ]
    },
    {
      id: 'business',
      name: 'Бизнес-контент',
      description: 'Создавайте деловые документы и предложения',
      icon: '💼',
      category: 'Бизнес',
      features: ['Предложения', 'Отчёты', 'Письма', 'Планы'],
      prompts: [
        'Коммерческое предложение IT-услуг',
        'План развития проекта',
        'Письмо для привлечения инвестиций'
      ]
    },
    {
      id: 'creative',
      name: 'Креативные идеи',
      description: 'Генерируйте идеи для проектов и творчества',
      icon: '💡',
      category: 'Идеи',
      features: ['Мозговой штурм', 'Концепции', 'Названия', 'Слоганы'],
      prompts: [
        'Идеи для мобильного приложения',
        'Концепция арт-инсталляции',
        'Название для кафе в центре города'
      ]
    }
  ];

  const recentWorks = [
    {
      title: 'Космическая одиссея',
      type: 'Рассказ',
      date: '2 часа назад',
      length: '1,500 слов',
      genre: 'Фантастика'
    },
    {
      title: 'Обзор iPhone 15',
      type: 'Сценарий',
      date: 'Вчера',
      length: '5 минут',
      genre: 'Технологии'
    },
    {
      title: 'Утренняя роса',
      type: 'Стихотворение',
      date: '3 дня назад',
      length: '16 строк',
      genre: 'Лирика'
    }
  ];

  const templates = [
    {
      name: 'Структура рассказа',
      description: 'Классическая структура повествования',
      content: '1. Экспозиция\n2. Завязка\n3. Развитие действия\n4. Кульминация\n5. Развязка'
    },
    {
      name: 'Описание персонажа',
      description: 'Шаблон для создания ярких героев',
      content: 'Имя:\nВозраст:\nВнешность:\nХарактер:\nЦели:\nСтрахи:'
    },
    {
      name: 'Сценарий видео',
      description: 'Структура для YouTube ролика',
      content: '1. Хук (0-15 сек)\n2. Введение\n3. Основная часть\n4. Заключение\n5. Призыв к действию'
    }
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    // Simulate content generation
    setTimeout(() => {
      const samples = {
        story: `В далёком будущем, когда человечество освоило межзвёздные путешествия, молодой исследователь Алекс обнаружил странный сигнал из глубин космоса. Этот сигнал приведёт его к открытию, которое изменит представление о жизни во Вселенной...

Корабль "Надежда" медленно приближался к источнику загадочного сигнала. Команда из пяти человек работала в напряжённом молчании, каждый понимал важность этой миссии. Капитан Морган, ветеран космических экспедиций, внимательно следил за показаниями приборов.

"Сигнал усиливается," - сообщила навигатор Лина. "Мы приближаемся к цели."`,
        
        script: `СЦЕНАРИЙ: "Обзор новой технологии ИИ"

КАДР 1 - ХУК (0-15 сек)
[Крупный план. Ведущий смотрит в камеру]
ВЕДУЩИЙ: "Что если я скажу, что за последние 24 часа ИИ научился делать то, что раньше казалось невозможным?"

КАДР 2 - ИНТРО (15-30 сек)
[Анимация логотипа, энергичная музыка]
ВЕДУЩИЙ (голос за кадром): "Привет! С вами Технология Будущего, и сегодня мы разберём революционную технологию..."`,
        
        blog: `# Искусственный интеллект в 2024: Тренды, которые изменят мир

Искусственный интеллект продолжает развиваться с невероятной скоростью. В этом году мы стали свидетелями прорывов, которые ещё недавно казались фантастикой.

## Мультимодальные ИИ-системы

Новое поколение ИИ может работать одновременно с текстом, изображениями, аудио и видео. Это открывает безграничные возможности для творчества и решения сложных задач.

## Персонализированное обучение

ИИ-ассистенты теперь могут адаптироваться под стиль обучения каждого пользователя...`,
        
        poetry: `Утренний свет коснулся окна,
Росинки на траве блестят,
В душе звучит мелодия тонко —
Новый день зовёт к себя.

Птицы поют в ветвях зелёных,
Ветер играет листвой,
Мир полон красок обновлённых,
Жизнь наполняется мечтой.

Каждый рассвет — это возможность
Стать лучше, чем вчера был,
Найти в себе новую способность
И силы, что сон подарил.`,
        
        business: `КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
Разработка мобильного приложения

Уважаемые партнёры!

Представляем решение для цифровизации вашего бизнеса — современное мобильное приложение, которое увеличит продажи на 40% и улучшит клиентский опыт.

НАШИ ПРЕИМУЩЕСТВА:
• Опыт разработки 200+ приложений
• Команда из 15+ экспертов
• Поддержка 24/7
• Гарантия качества

ЭТАПЫ РАБОТЫ:
1. Анализ требований (1 неделя)
2. Дизайн и прототипирование (2 недели)
3. Разработка (6-8 недель)
4. Тестирование и запуск (1 неделя)

Стоимость: от 500,000 рублей
Срок реализации: 8-10 недель`,
        
        creative: `КРЕАТИВНЫЕ ИДЕИ ДЛЯ СТАРТАПА

1. EcoTracker - Приложение для отслеживания экологического следа
   • Сканирование продуктов и расчёт углеродного следа
   • Рекомендации по экологичному образу жизни
   • Соревнования с друзьями

2. SkillSwap - Платформа обмена навыками
   • Обучай других тому, что знаешь сам
   • Изучай новое взамен на свои навыки
   • Система репутации и отзывов

3. FoodRescue - Борьба с пищевыми отходами
   • Подключение ресторанов и покупателей
   • Скидки на продукты с истекающим сроком
   • Уведомления о распродажах

4. MindfulMoments - Медитация в AR
   • Виртуальные пространства для медитации
   • Адаптация под окружающую среду
   • Групповые сессии в виртуальной реальности`
      };

      const toolType = selectedTool || 'story';
      setGeneratedContent(samples[toolType as keyof typeof samples] || samples.story);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center animate-neon-pulse">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Творческий контент</h1>
                  <p className="text-sm text-muted-foreground">Генерация идей • Креативные решения</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="neon-border border-neon-cyan">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Creative Mode
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="generate" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="generate" className="data-[state=active]:bg-primary/20">
              <Icon name="Wand2" size={16} className="mr-2" />
              Генерация
            </TabsTrigger>
            <TabsTrigger value="library" className="data-[state=active]:bg-primary/20">
              <Icon name="Library" size={16} className="mr-2" />
              Библиотека
            </TabsTrigger>
            <TabsTrigger value="templates" className="data-[state=active]:bg-primary/20">
              <Icon name="FileText" size={16} className="mr-2" />
              Шаблоны
            </TabsTrigger>
            <TabsTrigger value="collaborate" className="data-[state=active]:bg-primary/20">
              <Icon name="Users" size={16} className="mr-2" />
              Совместная работа
            </TabsTrigger>
          </TabsList>

          {/* Generate Tab */}
          <TabsContent value="generate" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Tools Selection */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="glass p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Выберите инструмент</h3>
                  <div className="space-y-3">
                    {creativeTools.map((tool) => (
                      <div
                        key={tool.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                          selectedTool === tool.id
                            ? 'neon-border border-neon-cyan bg-primary/10'
                            : 'border-border hover:bg-muted/50'
                        }`}
                        onClick={() => setSelectedTool(tool.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{tool.icon}</div>
                          <div>
                            <p className="font-medium text-sm">{tool.name}</p>
                            <p className="text-xs text-muted-foreground">{tool.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {selectedTool && (
                  <Card className="glass p-6 animate-fade-in">
                    <h4 className="font-bold text-primary mb-3">Быстрые промпты</h4>
                    <div className="space-y-2">
                      {creativeTools.find(t => t.id === selectedTool)?.prompts.map((promptText, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="w-full text-left h-auto p-3 text-xs justify-start"
                          onClick={() => setPrompt(promptText)}
                        >
                          {promptText}
                        </Button>
                      ))}
                    </div>
                  </Card>
                )}
              </div>

              {/* Generation Area */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-primary">Генерация контента</h3>
                      <div className="flex items-center space-x-2">
                        <Select defaultValue="creative">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="creative">Креативный</SelectItem>
                            <SelectItem value="balanced">Сбалансированный</SelectItem>
                            <SelectItem value="precise">Точный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Textarea
                      placeholder="Опишите, что вы хотите создать... Чем детальнее описание, тем лучше результат!"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[120px] resize-none"
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Zap" size={14} />
                        <span>Символов: {prompt.length}/2000</span>
                      </div>
                      <Button
                        onClick={handleGenerate}
                        disabled={!prompt.trim() || isGenerating}
                        className="bg-gradient-to-r from-neon-cyan to-neon-blue text-white neon-border"
                      >
                        {isGenerating ? (
                          <>
                            <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                            Генерирую...
                          </>
                        ) : (
                          <>
                            <Icon name="Sparkles" size={16} className="mr-2" />
                            Генерировать
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Generated Content */}
                {(generatedContent || isGenerating) && (
                  <Card className="glass p-6 animate-fade-in">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-primary">Результат</h3>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Copy" size={16} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" size={16} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Share" size={16} />
                        </Button>
                      </div>
                    </div>

                    {isGenerating ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex items-center justify-center mb-4 mx-auto animate-neon-pulse">
                          <Icon name="Wand2" size={32} className="text-white" />
                        </div>
                        <p className="text-muted-foreground">ИИ создаёт уникальный контент...</p>
                      </div>
                    ) : (
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                          {generatedContent}
                        </pre>
                      </div>
                    )}
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Library Tab */}
          <TabsContent value="library" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-primary">Мои работы</h2>
              <div className="flex items-center space-x-3">
                <Input placeholder="Поиск..." className="w-64" />
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="story">Рассказы</SelectItem>
                    <SelectItem value="script">Сценарии</SelectItem>
                    <SelectItem value="poetry">Поэзия</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentWorks.map((work, index) => (
                <Card key={index} className="glass p-6 hover:neon-border hover:border-neon-cyan transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-primary">{work.title}</h3>
                      <p className="text-sm text-muted-foreground">{work.date}</p>
                    </div>
                    <Badge variant="outline">{work.type}</Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Объём:</span>
                      <span>{work.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Жанр:</span>
                      <span>{work.genre}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Eye" size={14} className="mr-1" />
                      Открыть
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MoreHorizontal" size={14} />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Шаблоны и структуры</h2>
              <p className="text-muted-foreground">Готовые каркасы для ваших творческих проектов</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="glass p-6 hover:neon-border hover:border-neon-blue transition-all duration-300">
                  <h3 className="font-bold text-primary mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <pre className="text-xs whitespace-pre-wrap font-mono">
                      {template.content}
                    </pre>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Icon name="Copy" size={14} className="mr-2" />
                    Использовать шаблон
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Collaborate Tab */}
          <TabsContent value="collaborate" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Совместная работа</h2>
              <p className="text-muted-foreground">Работайте над проектами вместе с командой</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass p-6">
                <Icon name="Users" size={32} className="text-neon-cyan mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Пригласить команду</h3>
                <p className="text-muted-foreground mb-4">
                  Добавьте коллег для совместной работы над проектами
                </p>
                <Button className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white">
                  Пригласить участников
                </Button>
              </Card>

              <Card className="glass p-6">
                <Icon name="MessageSquare" size={32} className="text-neon-magenta mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Обратная связь</h3>
                <p className="text-muted-foreground mb-4">
                  Получайте комментарии и предложения по улучшению
                </p>
                <Button variant="outline" className="w-full">
                  Настроить отзывы
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}