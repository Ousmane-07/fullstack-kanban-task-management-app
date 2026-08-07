export type Task = {
  id: number;
  title: string;
  completedSubtasks: number;
  totalSubtasks: number;
};

export type Column = { 
    id: number;
    name: string;
    tasks: Task[]
}




const columns: Column[] = [
  {
    id: 1,
    name: "TODO",
    tasks: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        completedSubtasks: 0,
        totalSubtasks: 3,
      },
    ],
  },
  {
    id: 2,
    name: "DOING",
    tasks: [
      {
        id: 3,
        title: "Design settings and search pages",
        completedSubtasks: 2,
        totalSubtasks: 3,
      },
    ],
  },
  {
    id: 3,
    name: "DONE",
    tasks: [
      {
        id: 4,
        title: "Conduct 5 wireframe tests",
        completedSubtasks: 1,
        totalSubtasks: 1
      }
    ],
  },
];

export default columns;