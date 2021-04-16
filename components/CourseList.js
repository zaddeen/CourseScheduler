import React, {useState} from 'react';
import { ScrollView} from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import {terms, getCourseTerm} from '../utils/course';

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  return (
    <ScrollView>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} view={view} />
    </ScrollView>
  );
};

export default CourseList;