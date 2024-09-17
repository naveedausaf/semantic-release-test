import packageJson from "../../package.json";

export default function Home() {
  return (
    <div className="bg-slate-500 h-auto h-dvh">
      <div className="max-w-screen-sm bg-green-300 my-0 p-4 mx-auto h-[100%]">
        <h1 className="text-4xl">Semantic Release Demo</h1>
        <p className="pt-6">
          This is version {packageJson.version} of the app.
        </p>
      </div>
    </div>
  );
}
