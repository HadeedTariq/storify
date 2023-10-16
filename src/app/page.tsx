import { getAuthSession } from "@/utils/authOptions";

export default async function Home() {
  const auth = await getAuthSession();
  console.log(auth);

  return <div>Hello welcome to storify</div>;
}
