import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

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
  <Text style={styles.bannerStyle}>{title}</Text>
);

const getCourseNumber = course => (
  course.id.slice(1)
);

const Course = ({course}) => (
  <TouchableOpacity style={styles.courseButton}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNumber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);

const CourseList = ({courses}) => (
  <ScrollView>
    <View style={styles.courseList}>
      {courses.map(course => <Course key={course.id} course={course} />) }
    </View>
  </ScrollView>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
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
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseButton: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});
