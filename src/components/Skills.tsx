import { Progress } from "./ui/progress";

const Skills = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center my-2">Skills</h1>
      <div className="flex items-center content-center">
        <p className="font-bold">React:</p>
        <Progress value={90} />
      </div>
      <div className="flex items-center content-center">
        <p className="font-bold">NextJs:</p>
        <Progress value={80} />
      </div>
      <div className="flex items-center content-center">
        <p className="font-bold">Mongoose:</p>
        <Progress value={90} />
      </div>
      <div className="flex items-center content-center">
        <p className="font-bold">Javascript:</p>
        <Progress value={80} />
      </div>
      <div className="flex items-center content-center">
        <p className="font-bold">HTml:</p>
        <Progress value={75} />
      </div>
    </div>
  );
};

export default Skills;
