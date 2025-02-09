// components/PDFDocument.tsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { PersonalDetails, Experience, Education, Language, Skill, Hobby } from '../../type';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

interface PDFDocumentProps {
  personalDetails: PersonalDetails;
  experiences: Experience[];
  educations: Education[];
  languages: Language[];
  skills: Skill[];
  hobbies: Hobby[];
  file: File | null;
}

const PDFDocument: React.FC<PDFDocumentProps> = ({
  personalDetails,
  experiences,
  educations,
  languages,
  skills,
  hobbies,
  file,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{personalDetails.fullName}</Text>
        <Text style={styles.text}>Email: {personalDetails.email}</Text>
        <Text style={styles.text}>Téléphone: {personalDetails.phone}</Text>
        <Text style={styles.text}>Adresse: {personalDetails.address}</Text>
        <Text style={styles.text}>Poste recherché: {personalDetails.postSeeking}</Text>
        <Text style={styles.text}>Description: {personalDetails.description}</Text>
        {file && <Image src={URL.createObjectURL(file)} style={styles.image} />}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Expériences</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.text}>
            <Text>{exp.companyName} - {exp.jobTitle}</Text>
            <Text>{exp.startDate} - {exp.endDate}</Text>
            <Text>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Éducation</Text>
        {educations.map((edu, index) => (
          <View key={index} style={styles.text}>
            <Text>{edu.school} - {edu.degree}</Text>
            <Text>{edu.startDate} - {edu.endDate}</Text>
            <Text>{edu.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Langues</Text>
        {languages.map((lang, index) => (
          <Text key={index} style={styles.text}>{lang.language} - {lang.proficiency}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Compétences</Text>
        {skills.map((skill, index) => (
          <Text key={index} style={styles.text}>{skill.name}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Loisirs</Text>
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.text}>{hobby.name}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFDocument;