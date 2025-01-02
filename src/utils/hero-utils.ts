import hero1 from '@/assets/images/heroes/1.jpg';
import hero2 from '@/assets/images/heroes/2.jpg';

export const getHeroImage = (id: number) => {
  switch (id) {
    case 1:
      return hero1;
    case 2:
      return hero2;
    default:
      return hero1;
  }
}
