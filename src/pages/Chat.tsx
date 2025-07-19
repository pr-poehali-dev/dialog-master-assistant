import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Привет! Я ДиалогМастер - ваш персональный ИИ-ассистент. Могу помочь с обучением, творчеством, программированием и многим другим. О чём поговорим?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'Отлично! Я готов помочь вам с этим вопросом. Давайте разберём детали...',
        'Интересная задача! Вот несколько идей для решения...',
        'Понимаю! Это важная тема. Предлагаю следующий подход...',
        'Замечательный вопрос! Начнём с основ и постепенно углубимся...'
      ];
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  const suggestedPrompts = [
    "Помоги создать игру на JavaScript",
    "Объясни основы машинного обучения",
    "Напиши короткий рассказ про космос",
    "Как изучить Python с нуля?"
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center animate-neon-pulse">
                  <Icon name="MessageSquare" size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Чат-ассистент</h1>
                  <p className="text-sm text-muted-foreground">Онлайн • Готов помочь</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="neon-border border-neon-cyan">
                <Icon name="Zap" size={14} className="mr-1" />
                Pro Mode
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6 flex gap-6 h-[calc(100vh-100px)]">
        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Quick Actions */}
          <Card className="glass p-6">
            <h3 className="text-lg font-semibold mb-4 text-primary">Быстрые действия</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Code" size={16} className="mr-2 text-neon-blue" />
                Написать код
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="BookOpen" size={16} className="mr-2 text-neon-magenta" />
                Объяснить тему
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Lightbulb" size={16} className="mr-2 text-neon-cyan" />
                Генерировать идеи
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Languages" size={16} className="mr-2 text-neon-blue" />
                Перевести текст
              </Button>
            </div>
          </Card>

          {/* Chat History */}
          <Card className="glass p-6">
            <h3 className="text-lg font-semibold mb-4 text-primary">История чатов</h3>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer hover:bg-primary/20 transition-colors">
                <p className="text-sm font-medium">Создание веб-приложения</p>
                <p className="text-xs text-muted-foreground">2 часа назад</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <p className="text-sm font-medium">Изучение Python</p>
                <p className="text-xs text-muted-foreground">Вчера</p>
              </div>
              <div className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                <p className="text-sm font-medium">Написание статьи</p>
                <p className="text-xs text-muted-foreground">3 дня назад</p>
              </div>
            </div>
          </Card>

          {/* AI Modes */}
          <Card className="glass p-6">
            <h3 className="text-lg font-semibold mb-4 text-primary">Режимы ИИ</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded bg-primary/20 border border-primary/30">
                <span className="text-sm font-medium">Универсальный</span>
                <Icon name="Check" size={16} className="text-neon-cyan" />
              </div>
              <div className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer">
                <span className="text-sm">Программирование</span>
                <Icon name="Code" size={16} className="text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer">
                <span className="text-sm">Творческий</span>
                <Icon name="Palette" size={16} className="text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between p-2 rounded hover:bg-muted/50 cursor-pointer">
                <span className="text-sm">Обучающий</span>
                <Icon name="GraduationCap" size={16} className="text-muted-foreground" />
              </div>
            </div>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <Card className="glass flex-1 flex flex-col">
            {/* Messages */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-neon-magenta to-neon-cyan' 
                          : 'bg-gradient-to-r from-neon-blue to-neon-cyan animate-neon-pulse'
                      }`}>
                        <Icon 
                          name={message.type === 'user' ? 'User' : 'Brain'} 
                          size={16} 
                          className="text-white" 
                        />
                      </div>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground ml-auto'
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString('ru-RU', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="flex items-start space-x-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center animate-neon-pulse">
                        <Icon name="Brain" size={16} className="text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t border-border p-6">
              {/* Suggested Prompts */}
              {messages.length === 1 && (
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-3">Попробуйте один из примеров:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedPrompts.map((prompt, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-8"
                        onClick={() => setInputMessage(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Напишите ваш вопрос..."
                    className="pr-12 bg-background border-border/50 focus:border-primary"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  >
                    <Icon name="Paperclip" size={16} />
                  </Button>
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-neon-blue to-neon-cyan text-white neon-border"
                >
                  <Icon name="Send" size={16} />
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <span>ДиалогМастер может допускать ошибки. Проверяйте важную информацию.</span>
                <div className="flex items-center space-x-4">
                  <span>Токенов: 1,234/4,000</span>
                  <Badge variant="outline" className="text-xs">
                    <Icon name="Zap" size={10} className="mr-1" />
                    Pro
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}