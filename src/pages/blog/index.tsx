import {AddAlertOutlined} from "@mui/icons-material";
import {useState} from "react";

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const blogPosts = Array.from({length: 20}, (_, index) => index + 1);

    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
    const currentPosts = blogPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="px-4 py-6" data-aos="fade-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
                {currentPosts.map((item) => (
                    <div
                        key={item}
                        className="bg-white w-[400px] rounded overflow-hidden hover:shadow transition-shadow duration-300 cursor-pointer"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <img
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                            className="w-full h-48 object-cover"
                            alt="Blog Post"
                        />
                        <div className="p-5">
                            <div className="text-2xl font-bold text-gray-800 mb-2">
                                Why is Self Study the Best Study Technique
                            </div>
                            <hr className="my-2 border-gray-300"/>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <AddAlertOutlined fontSize="large" className="text-green-500"/>
                                    <div className="flex flex-col">
                                        <span className="text-gray-800">Exams Nepal</span>
                                        <span className="text-xs text-gray-500">12th May 2023 23:30</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 gap-3">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded-lg ${
                            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                        } hover:bg-blue-400`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogPage;
