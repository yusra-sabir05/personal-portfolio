"use client"
import { useSectionInView } from "@/lib/userInView";
import Project from "./project-card";
import SectionHeading from "./section-heading";
import { projectData } from "@/lib/data";

export default function  Projects(){
    const {  ref } = useSectionInView("#projects",0.1);
    return(
        <section id="projects"
        ref={ref}
         className="font-medium scroll-mt-28 mb-28">
            <SectionHeading>
               {"My Projects"}
            </SectionHeading>
            <div>
                {
                    projectData.map((project, index) => (
                        <Project {...project} key={index}/>

                    ))
                }
            </div>

        </section>
    )

}