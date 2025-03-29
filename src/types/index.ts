export interface Creator {
    id: string;
    name: string;
    avatar: string;
    socialLinks: {
      youtube?: string;
      twitch?: string;
      twitter?: string;
      instagram?: string;
    };
    description: string;
    content: Content[];
  }
  
  export interface Content {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
    type: 'video' | 'stream' | 'post';
    date: string;
  }
  
  export interface Team {
    id: string;
    game: string;
    roster: Player[];
    coach: Staff;
    manager: Staff;
  }
  
  export interface Player {
    id: string;
    name: string;
    nickname: string;
    role: string;
    photo: string;
  }
  
  export interface Staff {
    id: string;
    name: string;
    role: string;
    photo: string;
  }
  
  export interface News {
    id: string;
    title: string;
    content: string;
    image: string;
    date: string;
    category: string;
  }