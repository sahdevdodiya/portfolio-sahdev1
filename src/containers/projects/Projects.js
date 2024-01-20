// import React, { useState, useEffect, useContext, Suspense } from "react";
// import "./Project.scss";
// import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

// import StyleContext from "../../contexts/StyleContext";
// import Loading from "../../containers/loading/Loading";

// export default function Projects() {
//   const renderLoader = () => <Loading />;
//   const [repo, setrepo] = useState([]);
//   const { isDark } = useContext(StyleContext);

//   useEffect(() => {
//     const getRepoData = () => {
//       fetch("/profile.json")
//         .then(result => {
//           if (result.ok) {
//             return result.json();
//           }
//           throw result;
//         })
//         .then(response => {
//           setrepoFunction(response.data.user.pinnedItems.edges);
//         })
//         .catch(function (error) {
//           console.error(
//             `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
//           );
//           setrepoFunction("Error");
//         });
//     };
//     getRepoData();
//   }, []);

//   function setrepoFunction(array) {
//     setrepo(array);
//   }

//   return (
//     <Suspense fallback={renderLoader()}>
//       <div className="main" id="opensource">
//         <h1 className="project-title">Open Source Projects</h1>
//         <div className="repo-cards-div-main">
//           {repo.map((v, i) => {
//             if (!v) {
//               console.error(
//                 `Github Object for repository number : ${i} is undefined`
//               );
//             }
//             return <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />;
//           })}
//         </div>
//         {/* Button with GitHub link removed */}
//       </div>
//     </Suspense>
//   );
// }

import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import Button from "../../components/button/Button";
import "./Project.scss";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then((response) => {
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
    setrepo(array || []); // Ensure that array is defined, or set an empty array if it's null or undefined
  }

  if (!Array.isArray(repo)) {
    // Check if repo is not an array
    console.error("Repo data is not an array.");
    return <FailedLoading />;
  }

  if (repo.length === 0) {
    // Check if repo array is empty
    return <FailedLoading />;
  }

  return (
    <Suspense fallback={renderLoader()}>
    <div>
        Please visit my linkedin for my amazing and creative project's : 
        <a href="https://www.linkedin.com/in/dodiya-sahdev/" target="_blank">Visit my LinkedIn profile</a>
      </div>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
            }
            return (
              <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
            );
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
}




