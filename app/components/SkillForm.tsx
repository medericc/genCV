import { Skill } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

interface SkillFormProps {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

const SkillForm: React.FC<SkillFormProps> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState<Skill>({ name: '' });

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill({ name: '' });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Compétence"
        value={newSkill.name}
        onChange={(e) => setNewSkill({ name: e.target.value })}
        className="input input-bordered w-full"
      />
      <button onClick={handleAddSkill} className="btn btn-primary mt-4">
        Ajouter <Plus className="w-4" />
      </button>
    </div>
  );
};

export default SkillForm;