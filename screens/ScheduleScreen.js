import { StatusBar } from 'expo-status-bar';
import {firebase} from '../utils/firebase';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView,} from 'react-native';
import CourseList from '../components/CourseList';
import UserContext from '../UserContext';

const schedule = {
  title: "CS Courses for 2020-2021",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const fixCourses = json => ({
  ...json,
  courses: Object.values(json.courses)
});

const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 24,
  },
  bannerStyle: {
        marginTop: 50,
        color: '#888',
        fontSize: 32,
  },
});

export default ScheduleScreen;