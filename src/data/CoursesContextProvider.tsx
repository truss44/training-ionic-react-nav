import React, { useState } from "react";
import CoursesContext, { Course, Goal } from "./courses-context";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      // Sample Default Data
      id: "c1",
      title: "React - The Complete Guide",
      enrolled: new Date(),
      goals: [],
      included: true
    },
  ]);

  const addCourse = (title: string, date: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title: title,
      enrolled: date,
      goals: [],
      included: true
    };

    setCourses((curCourses) => {
      return curCourses.concat(newCourse);
    });
  };

  const addGoal = (courseId: string, text: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text: text,
    };

    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.concat(newGoal);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.filter((goal) => goal.id !== goalId);
      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[
        updatedCourseIndex
      ].goals.slice();
      const updatedCourseGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId
      );
      const updatedGoal = { ...updatedCourseGoals[updatedCourseGoalIndex], text: newText };
      
      updatedCourseGoals[updatedCourseGoalIndex] = updatedGoal;

      const updatedCourse = { ...updatedCourses[updatedCourseIndex] };

      updatedCourse.goals = updatedCourseGoals;
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  const changeCourseFilter = (courseId: string, isIncluded: boolean) => {  
    setCourses((curCourses) => {
      const updatedCourses = [...curCourses];
      const updatedCourseIndex = updatedCourses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourse = { ...updatedCourses[updatedCourseIndex], included: isIncluded };
      updatedCourses[updatedCourseIndex] = updatedCourse;

      return updatedCourses;
    });
  };

  return (
    <CoursesContext.Provider
      value={{
        courses: courses,
        addCourse: addCourse,
        addGoal: addGoal,
        deleteGoal: deleteGoal,
        updateGoal: updateGoal,
        changeCourseFilter: changeCourseFilter
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
