import React from "react";

const PostHeader = (props) => {
  const { iconName, user } = props;
  const { full_name: userFullName, username, base64EncodedPP } = user;

  return (
    <div className="post-header mb-2 flex justify-between items-center">
      <img
        src={`data:image/jpg; base64, ${base64EncodedPP}`}
        className="rounded-full w-9 h-9"
        alt={userFullName}
        title={userFullName}
      />
      <a
        href={`https://instagram.com/${username}`}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-slate-800"
      >
        @{username}
      </a>
      <div className="post-type">
        <i className={`bx bx-${iconName} text-2xl`} />
      </div>
    </div>
  );
};

export default PostHeader;
