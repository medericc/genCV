import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '@/type';
import React from 'react';
import Image from 'next/image';
import { BriefcaseBusiness, GraduationCap, Mail, MapPinCheckInside, Phone, Star } from 'lucide-react';

type Props = {
  personalDetails: PersonalDetails;
  file: File | null;
  theme: string;
  experiences: Experience[];
  educations: Education[];
  languages: Language[];
  skills: Skill[];
  hobbies: Hobby[];
  download?: boolean;
  ref?: any;
};

/**
 * Formate une date au format français (ex: "12 janv. 2023").
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

/**
 * Génère une représentation visuelle des étoiles pour le niveau de compétence.
 */
const getStarRating = (proficiency: string) => {
  const maxStars = 5;
  let filledStars = 0;

  switch (proficiency) {
    case 'Débutant':
      filledStars = 1;
      break;
    case 'Intermédiaire':
      filledStars = 3;
      break;
    case 'Avancé':
      filledStars = 5;
      break;
    default:
      filledStars = 0;
  }

  return (
    <>
      {Array.from({ length: filledStars }, (_, index) => (
        <Star key={index} className="text-primary" />
      ))}
      {Array.from({ length: maxStars - filledStars }, (_, index) => (
        <Star key={index + filledStars} className="text-gray-300" />
      ))}
    </>
  );
};

/**
 * Affiche une liste de contacts.
 */
const ContactList: React.FC<{ personalDetails: PersonalDetails }> = ({ personalDetails }) => (
  <ul className="space-y-2">
    {personalDetails.phone && (
      <li className="flex">
        <Phone className="w-5 text-primary mr-2" />
        <span className="break-all text-sm">{personalDetails.phone}</span>
      </li>
    )}
    {personalDetails.email && (
      <li className="flex">
        <Mail className="w-5 text-primary mr-2" />
        <span className="break-all text-sm">{personalDetails.email}</span>
      </li>
    )}
    {personalDetails.address && (
      <li className="flex">
        <MapPinCheckInside className="w-5 text-primary mr-2" />
        <span className="break-all text-sm">{personalDetails.address}</span>
      </li>
    )}
  </ul>
);

/**
 * Affiche une liste de compétences sous forme de badges.
 */
const SkillsList: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill, index) => (
      <p key={index} className="badge badge-primary uppercase">
        {skill.name}
      </p>
    ))}
  </div>
);

/**
 * Affiche une liste de langues avec leur niveau de compétence.
 */
const LanguagesList: React.FC<{ languages: Language[] }> = ({ languages }) => (
  <div className="flex flex-col space-y-2">
    {languages.map((lang, index) => (
      <div key={index}>
        <span className="capitalize font-semibold">{lang.language}</span>
        <div className="flex mt-2">{getStarRating(lang.proficiency)}</div>
      </div>
    ))}
  </div>
);

/**
 * Affiche une liste de hobbies.
 */
const HobbiesList: React.FC<{ hobbies: Hobby[] }> = ({ hobbies }) => (
  <div className="flex flex-col space-y-2">
    {hobbies.map((hobby, index) => (
      <div key={index}>
        <span className="capitalize">{hobby.name}</span>
      </div>
    ))}
  </div>
);

/**
 * Affiche une liste d'expériences professionnelles.
 */
const ExperiencesList: React.FC<{ experiences: Experience[] }> = ({ experiences }) => (
  <ul className="steps steps-vertical space-y-3">
    {experiences.map((exp, index) => (
      <li className="step step-primary" key={index}>
        <div className="text-left">
          <h2 className="flex text-md uppercase font-bold">
            <BriefcaseBusiness className="w-5" />
            <span className="ml-2">{exp.jobTitle}</span>
          </h2>
          <div className="text-sm my-2">
            <span className="badge badge-primary">{exp.companyName}</span>
            <span className="italic ml-2">
              {formatDate(exp.startDate)} au {formatDate(exp.endDate)}
            </span>
          </div>
          <p className="text-sm">{exp.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

/**
 * Affiche une liste de formations.
 */
const EducationsList: React.FC<{ educations: Education[] }> = ({ educations }) => (
  <ul className="steps steps-vertical space-y-3">
    {educations.map((edu, index) => (
      <li className="step step-primary" key={index}>
        <div className="text-left">
          <h2 className="flex text-md uppercase font-bold">
            <GraduationCap className="w-5" />
            <span className="ml-2">{edu.degree}</span>
          </h2>
          <div className="text-sm my-2">
            <span className="badge badge-primary">{edu.school}</span>
            <span className="italic ml-2">
              {formatDate(edu.startDate)} au {formatDate(edu.endDate)}
            </span>
          </div>
          <p className="text-sm">{edu.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

const CVPreview: React.FC<Props> = ({ personalDetails, file, theme, experiences, educations, languages, skills, hobbies, download, ref }) => {
  return (
    <div ref={ref} className={`flex p-16 w-[950px] h-[1200px] shadow-lg ${download ? 'mb-10' : ''}`} data-theme={theme}>
      {/* Colonne de gauche */}
      <div className="flex flex-col w-1/3">
        {/* Photo de profil */}
        <div className="h-80 rounded-full border-8 overflow-hidden border-primary">
          {file && (
            <Image
              src={URL.createObjectURL(file)}
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-cover"
              alt="Photo de profil"
              onLoadingComplete={() => {
                if (typeof file !== 'string') {
                  URL.revokeObjectURL(URL.createObjectURL(file));
                }
              }}
            />
          )}
        </div>

        {/* Section Contact */}
        <div className="mt-4">
          <h1 className="uppercase font-bold my-2">Contact</h1>
          <ContactList personalDetails={personalDetails} />
        </div>

        {/* Section Compétences */}
        <div className="mt-6">
          <h1 className="uppercase font-bold my-2">Compétences</h1>
          <SkillsList skills={skills} />
        </div>

        {/* Section Langues */}
        <div className="mt-6">
          <h1 className="uppercase font-bold my-2">Langues</h1>
          <LanguagesList languages={languages} />
        </div>

        {/* Section Hobbies */}
        <div className="mt-6">
          <h1 className="uppercase font-bold my-2">Hobbies</h1>
          <HobbiesList hobbies={hobbies} />
        </div>
      </div>

      {/* Colonne de droite */}
      <div className="w-2/3 ml-8">
        {/* En-tête */}
        <div className="w-full flex flex-col space-y-4">
          <h1 className="uppercase text-xl">{personalDetails.fullName}</h1>
          <h2 className="uppercase text-5xl text-primary font-bold">{personalDetails.postSeeking}</h2>
          <p className="break-all w-full text-sm">{personalDetails.description}</p>
        </div>

        {/* Section Expériences */}
        <section className="w-full h-fit p-5">
          <h1 className="uppercase font-bold mb-2">Expériences</h1>
          <ExperiencesList experiences={experiences} />
        </section>

        {/* Section Formations */}
        <section className="mt-6">
          <h1 className="uppercase font-bold mb-2">Formations</h1>
          <EducationsList educations={educations} />
        </section>
      </div>
    </div>
  );
};

export default CVPreview;