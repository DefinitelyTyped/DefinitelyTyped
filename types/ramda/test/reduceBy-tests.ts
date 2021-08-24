import * as R from 'ramda';

interface Student {
  name: string;
  score: number;
}

() => {
  const reduceToNamesBy = R.reduceBy(
    (acc: string[], student: Student) => acc.concat(student.name),
    [],
  );
  const namesByGrade = reduceToNamesBy(student => {
    const score = student.score;
    return score < 65
      ? 'F'
      : score < 70
      ? 'D'
      : score < 80
      ? 'C'
      : score < 90
      ? 'B'
      : 'A';
  });
  const students = [
    { name: 'Lucy', score: 92 },
    { name: 'Drew', score: 85 },
    { name: 'Bart', score: 62 },
  ];
  const names = namesByGrade(students);
  // {
  //   'A': ['Lucy'],
  //   'B': ['Drew']
  //   'F': ['Bart']
  // }
};
