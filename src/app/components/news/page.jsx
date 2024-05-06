import React from "react";

function News() {
  const newsData = [
    {
      image: "https://preview.colorlib.com/theme/pentax/img/blog/1.jpg.webp",
      file: "company",
      date: "Feb 14 2019",
      title: "Lorem ipsum dolor sit.",
      data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic!",
      anchor: "#",
    },
    {
      image: "https://preview.colorlib.com/theme/pentax/img/blog/2.jpg.webp",
      file: "company",
      date: "Mar 14 2020",
      title: "Lorem ipsum dolor sit.",
      data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic!",
      anchor: "#",
    },
    {
      image: "https://preview.colorlib.com/theme/pentax/img/blog/3.jpg.webp",
      file: "company",
      date: "Jun 2023",
      title: "Lorem ipsum dolor sit.",
      data: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, hic!",
      anchor: "#",
    },
  ];

  return (
    <>
      <div className="container py-2 py-md-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="">
            <h3 className="text-center">
              Our <p className="text-danger d-inline-block">Recent</p> News
            </h3>
            <small>
              Together female let signs for for fish fowl may first.
            </small>
          </div>
        </div>

        <div className="container py-2 py-md-4">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {newsData.map((data, index) => {
              return (
                <>
                  <div className="container col" key={index}>
                    <div className=" newsImage d-flex overflow-hidden bg-[#F7F7F7] p-3 flex-column  ">
                      <img src={data.image} alt="image" className="img-fluid" />
                      <p className="d-flex justify-content-between align-items-center py-3">
                        <small><i class="bi bi-file-earmark-check"></i>{data.file}</small>
                        <small><i class="bi bi-clock"></i>{data.date}</small>
                      </p>
                      <strong className="text-start">{data.title}</strong>
                      <p>{data.data}</p>
                      <a
                        href={data.anchor}
                        className="text-uppercase text-decoration-none text-dark"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
