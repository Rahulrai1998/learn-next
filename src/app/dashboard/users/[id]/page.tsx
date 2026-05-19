import React from "react";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  console.log(await params, "Paramas");
  const { id } = await params;
  return <div>User details for user-{id}</div>;
};

export default UserPage;
