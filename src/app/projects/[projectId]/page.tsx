import Image from "next/image";

const ProjectDetailsCard = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(
    `https://a5-portfolio-server.vercel.app/api/v1/project/${projectId}`
  );
  const project = await res.json();
  const { data } = project;

  return (
    <div>
      <h1 className="text-3xl text-center my-5 font-bold">
        Details of <span className="text-red-600">{data?.title}</span>
      </h1>
      <div className="flex justify-center mt-14">
        <div className="flex items-center content-center">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image src={data?.image} alt="" width={300} height={300} />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data?.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data?.description}
              </p>
              <small>Website Link: {data?.liveLink}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
