"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";




export default function Home() {
  
  return ( 
   
   <div className="p-4">
  <div className="flex flex-col gap-y-4">

   <div>
  <Button variant="elevated">im a button</Button>
</div>
<div>
  <Input placeholder="enter your answer here"/>

</div>
<div>
<Progress value={50}></Progress>
</div>
<div>
  <Textarea placeholder="comments please"/>

</div>
<div>
  <Checkbox></Checkbox>
</div>
      
    </div>
    </div>);
}
    
    