import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function GameDev() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [projectName, setProjectName] = useState('');

  const gameTemplates = [
    {
      id: 'platformer',
      name: '2D Платформер',
      description: 'Классическая игра-платформер с прыжками и сбором предметов',
      difficulty: 'Начинающий',
      time: '30 мин',
      tech: ['HTML5', 'JavaScript', 'Canvas'],
      preview: '🎮',
      features: ['Персонаж с анимациями', 'Физика прыжков', 'Система уровней', 'Сбор монет']
    },
    {
      id: 'puzzle',
      name: 'Головоломка',
      description: 'Логическая игра с перемещением блоков и решением задач',
      difficulty: 'Средний',
      time: '45 мин',
      tech: ['React', 'TypeScript', 'CSS'],
      preview: '🧩',
      features: ['Сетка блоков', 'Логика проверки', 'Система очков', 'Таймер']
    },
    {
      id: 'arcade',
      name: 'Аркада',
      description: 'Быстрая аркадная игра с нарастающей сложностью',
      difficulty: 'Продвинутый',
      time: '60 мин',
      tech: ['WebGL', 'JavaScript', 'WebAudio'],
      preview: '🕹️',
      features: ['Быстрый геймплей', 'Спецэффекты', 'Звуковые эффекты', 'Таблица рекордов']
    },
    {
      id: 'quiz',
      name: 'Викторина',
      description: 'Интерактивная викторина с различными типами вопросов',
      difficulty: 'Начинающий',
      time: '20 мин',
      tech: ['React', 'JSON', 'LocalStorage'],
      preview: '❓',
      features: ['База вопросов', 'Система очков', 'Статистика', 'Категории']
    }
  ];

  const codeExamples = [
    {
      title: 'Движение персонажа',
      language: 'JavaScript',
      code: `class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.jumping = false;
  }
  
  update() {
    if (keys.left) this.x -= this.speed;
    if (keys.right) this.x += this.speed;
    if (keys.up && !this.jumping) {
      this.jump();
    }
  }
  
  jump() {
    this.jumping = true;
    this.velocity = -15;
  }
}`
    },
    {
      title: 'Система коллизий',
      language: 'JavaScript',
      code: `function checkCollision(rect1, rect2) {
  return rect1.x < rect2.x + rect2.width &&
         rect1.x + rect1.width > rect2.x &&
         rect1.y < rect2.y + rect2.height &&
         rect1.y + rect1.height > rect2.y;
}

function handleCollisions() {
  platforms.forEach(platform => {
    if (checkCollision(player, platform)) {
      player.onGround = true;
      player.y = platform.y - player.height;
    }
  });
}`
    }
  ];

  const recentProjects = [
    {
      name: 'Space Adventure',
      type: 'Аркада',
      progress: 85,
      lastModified: '2 часа назад',
      status: 'В разработке'
    },
    {
      name: 'Math Quiz Pro',
      type: 'Викторина',
      progress: 100,
      lastModified: 'Вчера',
      status: 'Завершён'
    },
    {
      name: 'Puzzle Master',
      type: 'Головоломка',
      progress: 60,
      lastModified: '3 дня назад',
      status: 'В разработке'
    }
  ];

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
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-magenta to-neon-cyan flex items-center justify-center animate-neon-pulse">
                  <Icon name="Gamepad2" size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Создание игр</h1>
                  <p className="text-sm text-muted-foreground">Генерация кода • Современные анимации</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="neon-border border-neon-magenta">
                <Icon name="Code" size={14} className="mr-1" />
                Code Gen
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="Share" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="templates" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="templates" className="data-[state=active]:bg-primary/20">
              <Icon name="Grid3X3" size={16} className="mr-2" />
              Шаблоны
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-primary/20">
              <Icon name="FolderOpen" size={16} className="mr-2" />
              Проекты
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-primary/20">
              <Icon name="Code" size={16} className="mr-2" />
              Примеры кода
            </TabsTrigger>
            <TabsTrigger value="learn" className="data-[state=active]:bg-primary/20">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Обучение
            </TabsTrigger>
          </TabsList>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 neon-text text-primary">
                Выберите шаблон игры
              </h2>
              <p className="text-xl text-muted-foreground">
                Готовые шаблоны с полным кодом и анимациями
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {gameTemplates.map((template) => (
                <Card 
                  key={template.id}
                  className={`glass p-6 cursor-pointer transition-all duration-300 hover:neon-border hover:border-neon-magenta ${
                    selectedTemplate === template.id ? 'neon-border border-neon-cyan' : ''
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">{template.preview}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{template.name}</h3>
                    <p className="text-muted-foreground text-sm">{template.description}</p>
                  </div>

                  <div className="flex justify-center space-x-4 mb-4">
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {template.time}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      {template.difficulty}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Технологии:</p>
                    <div className="flex flex-wrap gap-1">
                      {template.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Возможности:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {template.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedTemplate === template.id && (
                    <div className="border-t border-border pt-4 animate-fade-in">
                      <Input
                        placeholder="Название вашей игры"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="mb-3"
                      />
                      <Button 
                        className="w-full bg-gradient-to-r from-neon-magenta to-neon-cyan text-white neon-border"
                        disabled={!projectName.trim()}
                      >
                        <Icon name="Rocket" size={16} className="mr-2" />
                        Создать игру
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-primary">Мои проекты</h2>
              <Button className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white">
                <Icon name="Plus" size={16} className="mr-2" />
                Новый проект
              </Button>
            </div>

            <div className="grid gap-6">
              {recentProjects.map((project, index) => (
                <Card key={index} className="glass p-6 hover:neon-border hover:border-neon-blue transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                        <Icon name="Gamepad2" size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.type} • {project.lastModified}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{project.progress}%</p>
                        <Progress value={project.progress} className="w-24" />
                      </div>
                      <Badge 
                        variant={project.status === 'Завершён' ? 'default' : 'secondary'}
                        className={project.status === 'Завершён' ? 'bg-green-500' : ''}
                      >
                        {project.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Icon name="ExternalLink" size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Code Examples Tab */}
          <TabsContent value="code" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Примеры кода</h2>
              <p className="text-muted-foreground">Готовые функции для вашей игры</p>
            </div>

            <div className="grid gap-6">
              {codeExamples.map((example, index) => (
                <Card key={index} className="glass p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-primary">{example.title}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{example.language}</Badge>
                      <Button variant="outline" size="sm">
                        <Icon name="Copy" size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Learning Tab */}
          <TabsContent value="learn" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Изучение GameDev</h2>
              <p className="text-muted-foreground">От основ до продвинутых техник</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass p-6 hover:neon-border hover:border-neon-blue transition-all duration-300">
                <Icon name="Play" size={32} className="text-neon-blue mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">Основы JavaScript</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Изучите основы программирования для создания игр
                </p>
                <Button variant="outline" className="w-full">
                  Начать курс
                </Button>
              </Card>

              <Card className="glass p-6 hover:neon-border hover:border-neon-magenta transition-all duration-300">
                <Icon name="Palette" size={32} className="text-neon-magenta mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">Анимации CSS</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Создавайте плавные анимации для персонажей
                </p>
                <Button variant="outline" className="w-full">
                  Изучить анимации
                </Button>
              </Card>

              <Card className="glass p-6 hover:neon-border hover:border-neon-cyan transition-all duration-300">
                <Icon name="Gamepad2" size={32} className="text-neon-cyan mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">Геймдизайн</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Принципы создания увлекательных игр
                </p>
                <Button variant="outline" className="w-full">
                  Основы дизайна
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}