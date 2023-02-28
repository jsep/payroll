import "./App.css";
import { DollarSign, Sheet, Users } from "lucide-react";
import React from "react";

function App() {
  return (
    <div className={"p-3 w-full border-green-600 border grid grid-cols-4"}>
      {/*Menu bar*/}
      <aside className={"border border-green-600 h-full"}>
        <div className="px-6 py-6">
          <p className="flex items-center text-2xl font-semibold tracking-tight">
            <DollarSign className="mr-2" />
            Manejo de Nominas
          </p>
        </div>
        <div className="space-y-4">
          <div className="px-6 py-2">
            <p className="my-2 flex items-center text-xl  tracking-tight">
              <Sheet className="mr-2" />
              Nominas
            </p>
            <p className="flex items-center text-xl  tracking-tight">
              <Users className="mr-2" />
              Empleados
            </p>
            <div className="space-y-1">
              {/* <Button
                variant="subtle"
                size="sm"
                className="w-full justify-start"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Listen Now
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                Browse
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Radio className="mr-2 h-4 w-4" />
                Radio
              </Button>*/}
            </div>
          </div>
        </div>
      </aside>
      {/*  Content*/}
      <div className={"border col-span-3"}></div>
    </div>
  );
}

export default App;
