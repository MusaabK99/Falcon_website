export interface Creator {
  id: string;
  name: string;
  avatar: string;
  role?: string;
  network?: string;
  credits?: number;
  supervisor?: {
    name: string;
    show: string;
    network: string;
  };
  socialLinks: {
    youtube?: string;
    twitch?: string;
    twitter?: string;
    instagram?: string;
  };
  description: string;
  content: Content[];
  featured?: boolean;
  verified?: boolean;
}

export interface Content {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  type: 'video' | 'stream' | 'post';
  date: string;
  creator?: Creator;
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

export const list =[
  "https://cdn.salla.sa/ydveby/70fb5a60-8e0b-49e0-af47-fb2300a7ec9b-500x500-uo4AUYYLTptNalKLibQFAWc1TuhHqvtHymntDetJ.png",
  "https://cdn.salla.sa/ydveby/083d01e7-12b4-4b60-bfdb-dd8d769e9586-500x500-BlsR3RiCjACCkGHIyXIuGIc3fmgpvXeU6lhl8Q7b.png",
  "https://cdn.salla.sa/ydveby/212dfa7f-2ed7-4ec3-a9dc-68d34e6b7190-500x500-mbSODtg0NxpaeP4w1Ge3zhTUE2cDaKsuL4GsDrs2.jpg",
  "https://cdn.salla.sa/ydveby/b3bd66f8-41d6-43dd-b1c7-9081d2cf82f1-500x500-Hl5osUScP62Mdv1rPxI2NuAPtETKcFU0vqQIoXC9.jpg",
  "https://cdn.salla.sa/ydveby/72c4158d-66d0-4810-bc80-6c8ec903a286-500x500-ADl2SOuiDzAH9DIlJ3q3npO60VdNoskr6RoZ96VK.jpg",
  "https://cdn.salla.sa/ydveby/bed966c1-00e8-4f7b-aaab-2561eec5fae1-500x500-8O8RI4aA0lCNtKfh4kphrOqoEEUIhVfFavsrDsgG.jpg",
  "https://cdn.salla.sa/ydveby/ed89fc2c-caee-4332-b9b4-9bad02dd69d6-500x500-kcF1hPEhgpi11gpdSiUaKj7FjSXJcR09SKBauc8q.jpg",
  "https://cdn.salla.sa/ydveby/032fd7f0-87cf-4488-b296-f768b3d96900-493.5125115848x500-aBLY3FcYxRkWvnoxX26F69gPLg50NECITmMQxhlO.jpg",
  "https://cdn.salla.sa/ydveby/297f4b6d-e9b9-4023-b3bb-cb4bf5ff2499-500x497.28892331526-UAynVOXcRvwtJ2rC34NyVZKjmrsXFpqcmIaTnLyQ.jpg",
  "https://cdn.salla.sa/ydveby/88ee4ff4-61c9-4c5c-b815-35ff99a65466-1000x853.60185902401-Fpx7WtynKnc54XWqfsQxOB8qo9ML9u7l32rDMcP8.jpg"
]

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