// ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projects'; // Import data projects Anda
import Navbar from './components/Navbar';
import { useTranslation } from "react-i18next";




// Fungsi helper untuk mencari proyek dari data bertab Anda
const findProjectById = (id) => {
  // Gabungkan semua proyek dari profesional dan pribadi
  const allProjects = [...(projects?.profesional || []),
    ...(projects?.pribadi || [])];
  return allProjects.find(p => p.id.toString() === id.toString());
};

const ProjectDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const project = findProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-10">
        <h1 className="text-3xl text-red-500">Proyek Tidak Ditemukan!</h1>
        <Link to="/" className="text-red-400 mt-4 block">← Kembali</Link>
      </div>
    );
  }

  const { t } = useTranslation();

  return (
    <div className="min-h-screen  text-white p-10 pt-24">
      
      <h1 className="text-5xl font-bold mt-6 mb-4">{t(project.titleKey)}</h1>
      <p className="text-gray-400 text-xl mb-8">{t(project.descKey)}</p>
      
      {/* Asumsi proyek Anda memiliki properti 'fullDescription' untuk detail lengkap */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">{t(project.positionKeyKey)}</h2>
        <h3 className="text-sm font-semibold mb-4">Tanggung Jawab</h3>
        <p>{t(project.responsibilityKey)}</p>
  
  {/* Logic untuk membuat daftar berpoin */}
  
        <p></p>

      </div>
      
      {/* Tampilkan info lainnya (misalnya teknologi, link live demo) di sini */}
    </div>
  );
};

export default ProjectDetail;