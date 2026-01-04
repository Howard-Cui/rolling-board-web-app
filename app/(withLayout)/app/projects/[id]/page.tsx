import ProjectDetail from "@/components/projectDetail";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="px-4 py-6 sm:px-8 lg:px-12 w-full flex justify-center">
      <ProjectDetail id={id} />
    </div>
  );
};

export default ProjectPage;
