import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Education() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'javascript',
      title: 'JavaScript с нуля',
      description: 'Полный курс по JavaScript от основ до продвинутых концепций',
      level: 'Начинающий',
      duration: '40 часов',
      lessons: 120,
      rating: 4.9,
      students: '50,000+',
      price: 'Бесплатно',
      image: '💻',
      skills: ['Переменные', 'Функции', 'Объекты', 'Асинхронность', 'DOM'],
      progress: 0,
      instructor: 'Алексей Петров'
    },
    {
      id: 'react',
      title: 'React для начинающих',
      description: 'Изучите современную разработку интерфейсов с React',
      level: 'Средний',
      duration: '30 часов',
      lessons: 85,
      rating: 4.8,
      students: '35,000+',
      price: '2,999 ₽',
      image: '⚛️',
      skills: ['Компоненты', 'Hooks', 'State', 'Props', 'Context'],
      progress: 25,
      instructor: 'Мария Иванова'
    },
    {
      id: 'python',
      title: 'Python разработка',
      description: 'От основ Python до создания веб-приложений',
      level: 'Начинающий',
      duration: '50 часов',
      lessons: 150,
      rating: 4.9,
      students: '75,000+',
      price: '3,999 ₽',
      image: '🐍',
      skills: ['Синтаксис', 'ООП', 'Django', 'API', 'Базы данных'],
      progress: 60,
      instructor: 'Дмитрий Козлов'
    },
    {
      id: 'design',
      title: 'UI/UX Дизайн',
      description: 'Основы пользовательского опыта и интерфейсов',
      level: 'Начинающий',
      duration: '25 часов',
      lessons: 60,
      rating: 4.7,
      students: '20,000+',
      price: '4,999 ₽',
      image: '🎨',
      skills: ['Figma', 'Прототипы', 'Типографика', 'Цвет', 'Юзабилити'],
      progress: 0,
      instructor: 'Анна Смирнова'
    }
  ];

  const achievements = [
    {
      title: 'Первые шаги',
      description: 'Завершили первый урок',
      icon: '🎯',
      completed: true
    },
    {
      title: 'Марафонец',
      description: 'Учились 7 дней подряд',
      icon: '🏃',
      completed: true
    },
    {
      title: 'Кодер',
      description: 'Написали 100 строк кода',
      icon: '👨‍💻',
      completed: false
    },
    {
      title: 'Эксперт',
      description: 'Завершили 3 курса',
      icon: '🧠',
      completed: false
    }
  ];

  const learningPaths = [
    {
      title: 'Веб-разработчик',
      description: 'Frontend + Backend разработка',
      courses: ['JavaScript', 'React', 'Node.js', 'Базы данных'],
      duration: '6 месяцев',
      difficulty: 'Средний',
      progress: 35
    },
    {
      title: 'Python разработчик',
      description: 'Backend разработка на Python',
      courses: ['Python', 'Django', 'PostgreSQL', 'API'],
      duration: '4 месяца',
      difficulty: 'Начинающий',
      progress: 60
    },
    {
      title: 'UX/UI Дизайнер',
      description: 'Дизайн пользовательских интерфейсов',
      courses: ['Figma', 'Принципы дизайна', 'Исследования', 'Прототипы'],
      duration: '3 месяца',
      difficulty: 'Начинающий',
      progress: 0
    }
  ];

  const todayTasks = [
    {
      course: 'JavaScript с нуля',
      lesson: 'Урок 15: Функции высшего порядка',
      duration: '25 мин',
      type: 'Видео',
      completed: false
    },
    {
      course: 'React для начинающих',
      lesson: 'Практика: Создание компонента',
      duration: '45 мин',
      type: 'Задание',
      completed: false
    },
    {
      course: 'Python разработка',
      lesson: 'Тест: Основы ООП',
      duration: '15 мин',
      type: 'Тест',
      completed: true
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta flex items-center justify-center animate-neon-pulse">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Обучение</h1>
                  <p className="text-sm text-muted-foreground">Персональные планы • Практика</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="neon-border border-neon-blue">
                <Icon name="Award" size={14} className="mr-1" />
                Уровень 3
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 glass">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary/20">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-primary/20">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Курсы
            </TabsTrigger>
            <TabsTrigger value="paths" className="data-[state=active]:bg-primary/20">
              <Icon name="MapPin" size={16} className="mr-2" />
              Треки
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-primary/20">
              <Icon name="Award" size={16} className="mr-2" />
              Достижения
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Today's Tasks */}
              <Card className="glass p-6 md:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-primary">Задачи на сегодня</h3>
                  <Badge variant="outline">{todayTasks.filter(task => !task.completed).length} осталось</Badge>
                </div>
                <div className="space-y-4">
                  {todayTasks.map((task, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        task.completed 
                          ? 'bg-green-500/10 border-green-500/30' 
                          : 'bg-muted/50 border-border hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            task.completed ? 'bg-green-500' : 'bg-muted-foreground/20'
                          }`}>
                            <Icon 
                              name={task.completed ? 'Check' : 'Clock'} 
                              size={16} 
                              className={task.completed ? 'text-white' : 'text-muted-foreground'} 
                            />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{task.lesson}</p>
                            <p className="text-xs text-muted-foreground">{task.course}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-xs mb-1">
                            {task.type}
                          </Badge>
                          <p className="text-xs text-muted-foreground">{task.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Study Stats */}
              <Card className="glass p-6">
                <h3 className="text-xl font-bold text-primary mb-6">Статистика</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">47</div>
                    <p className="text-sm text-muted-foreground">дней подряд</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-neon-blue">12</div>
                      <p className="text-xs text-muted-foreground">курсов</p>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-neon-magenta">156</div>
                      <p className="text-xs text-muted-foreground">уроков</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-neon-cyan mb-2">67%</div>
                    <Progress value={67} className="w-full" />
                    <p className="text-xs text-muted-foreground mt-1">общий прогресс</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Continue Learning */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Продолжить обучение</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.filter(course => course.progress > 0).map((course) => (
                  <Card key={course.id} className="glass p-6 hover:neon-border hover:border-neon-blue transition-all duration-300">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{course.image}</div>
                      <h4 className="font-bold text-primary">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">{course.instructor}</p>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Прогресс</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                    </div>
                    <Button variant="outline" className="w-full">
                      Продолжить
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 neon-text text-primary">
                Каталог курсов
              </h2>
              <p className="text-xl text-muted-foreground">
                Изучайте новые технологии с персональным подходом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card 
                  key={course.id}
                  className="glass p-6 hover:neon-border hover:border-neon-blue transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{course.image}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary">{course.title}</h3>
                        <Badge variant={course.price === 'Бесплатно' ? 'default' : 'outline'}>
                          {course.price}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Icon name="PlayCircle" size={14} className="mr-1" />
                          {course.lessons} уроков
                        </div>
                        <div className="flex items-center">
                          <Icon name="Star" size={14} className="mr-1 text-yellow-500" />
                          {course.rating}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Навыки:</p>
                        <div className="flex flex-wrap gap-1">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Прогресс</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} />
                        </div>
                      )}

                      <Button 
                        className={`w-full ${
                          course.progress > 0 
                            ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-white' 
                            : ''
                        }`}
                        variant={course.progress > 0 ? 'default' : 'outline'}
                      >
                        {course.progress > 0 ? 'Продолжить' : 'Начать курс'}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Learning Paths Tab */}
          <TabsContent value="paths" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Треки обучения</h2>
              <p className="text-muted-foreground">Структурированные программы для достижения целей</p>
            </div>

            <div className="grid gap-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="glass p-6 hover:neon-border hover:border-neon-magenta transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{path.title}</h3>
                      <p className="text-muted-foreground">{path.description}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">{path.difficulty}</Badge>
                      <p className="text-sm text-muted-foreground">{path.duration}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Курсы в треке:</p>
                    <div className="flex flex-wrap gap-2">
                      {path.courses.map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Прогресс</span>
                      <span>{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} />
                  </div>

                  <Button 
                    variant={path.progress > 0 ? 'default' : 'outline'}
                    className={path.progress > 0 ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan text-white' : ''}
                  >
                    {path.progress > 0 ? 'Продолжить трек' : 'Начать трек'}
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Достижения</h2>
              <p className="text-muted-foreground">Отмечайте свои успехи в обучении</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className={`glass p-6 text-center transition-all duration-300 ${
                    achievement.completed 
                      ? 'neon-border border-neon-cyan' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <div className={`text-6xl mb-4 ${achievement.completed ? '' : 'grayscale opacity-50'}`}>
                    {achievement.icon}
                  </div>
                  <h3 className={`font-bold mb-2 ${achievement.completed ? 'text-primary' : 'text-muted-foreground'}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  {achievement.completed && (
                    <Badge variant="default" className="mt-3 bg-green-500">
                      <Icon name="Check" size={12} className="mr-1" />
                      Получено
                    </Badge>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}