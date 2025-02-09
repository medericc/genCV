import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '@/type';

export const personalDetailsPreset: PersonalDetails = {
    fullName: 'Charline Charline',
    email: 'charline@gmail.com',
    phone: '+123456789',
    address: '123, Halle Beregovoy',
    photoUrl: '/logo.png',
    postSeeking:'Basketteuse',
    description:'. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr.Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr.Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr.Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr. Faire rigoler les gens et tirer en 3 points et meme les 2 en meme temps mdr'
    
};

export const experiencesPreset: Experience[] = [
    {
        id: 'uuid-1',
        jobTitle: 'Meneuse de Jeu',
        companyName: 'Tarbes GB',
        startDate: '2023-01-01',
        endDate: '2028-01-01',
        description: 'Jouer au basket et etre drole.'
    },
    {
        id: 'uuid-2',
        jobTitle: 'Arriere',
        companyName: 'Tarbes GB',
        startDate: '2022-01-01',
        endDate: '2023-01-01',
        description: 'Jouer au basket et etre drole.'  }
];

export const educationsPreset: Education[] = [
    {
        id: 'uuid-3',
        degree: 'Pivot',
        school: 'Anglet',
        startDate: '2015-09-01',
        endDate: '2018-06-01',
        description: 'Drole.'
    }
];

export const skillsPreset: Skill[] = [
    { id: 'uuid-4', name: 'Shoot' },
    { id: 'uuid-5', name: 'Passe' }
];

export const languagesPreset: Language[] = [
    { id: 'uuid-6', language: 'Anglais', proficiency: 'Avancé' },
    { id: 'uuid-7', language: 'Français', proficiency: 'Débutant' }
];

export const hobbiesPreset: Hobby[] = [
    { id: 'uuid-8', name: 'Voyager' },
    { id: 'uuid-9', name: 'Rester sur le banc' }
];
