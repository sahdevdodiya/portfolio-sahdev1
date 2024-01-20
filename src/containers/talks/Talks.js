import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
//import "./Project.scss";

import Button from "../../components/button/Button";
// import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

// const GithubRepoCard = lazy(() => import("../../components/githubRepoCard/GithubRepoCard"));

const FailedLoading = () => null;
const renderLoader = () => <Loading />;
export default function Projects() {
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }

  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              {/* return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              ); */}
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            // href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}


// import React, {useContext} from "react";
// import "./Talks.scss";
// import TalkCard from "../../components/talkCard/TalkCard";
// import {talkSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function Talks() {
//   const {isDark} = useContext(StyleContext);
//   if (!talkSection.display) {
//     return null;
//   }
//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="talks">
//         <div className="talk-header">
//           <h1 className="talk-header-title">{talkSection.title}</h1>
//           <p
//             className={
//               isDark
//                 ? "dark-mode talk-header-subtitle"
//                 : "subTitle talk-header-subtitle"
//             }
//           >
//             {talkSection.subtitle}
//           </p>
//           {talkSection.talks.map((talk, i) => {
//             return (
//               <TalkCard
//                 key={i}
//                 talkDetails={{
//                   title: talk.title,
//                   subtitle: talk.subtitle,
//                   slides_url: talk.slides_url,
//                   event_url: talk.event_url,
//                   image: talk.image,
//                   isDark
//                 }}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </Fade>
//   );
// }
