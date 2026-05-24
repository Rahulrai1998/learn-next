import React from "react";

type metadataProps = {
  params: Promise<{ id: string }>;
};
//dynamic metadata specific to the page or nested routes
export async function gererateMetadata({ params }: metadataProps) {
  const { id } = await params;
  // const resource = await getResourceById({ id });
  const title = id + " page";
  const description = id + " description";
  return {
    title,
    description,
  };
}

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  console.log(await params, "Paramas");
  const { id } = await params;
  return <div>User details for user-{id}</div>;
};

export default UserPage;
