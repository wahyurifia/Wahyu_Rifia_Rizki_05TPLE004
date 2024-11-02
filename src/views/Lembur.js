import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";
import { useState } from "react";

const Lembur = () => {
  const [data, setData] = useState([
    {
      name: "Wahyu Rifia Rizki",
      tanggal: "2003-10-20",
      jam: "10:35:00 || 15:35:00",
      keperluan_lembur: "lembur",
      status: "menunggu konfirmasi",
    },
    {
      name: "Dewi Ayu Pratiwi",
      tanggal: "2003-11-12",
      jam: "09:00:00 || 17:00:00",
      keperluan_lembur: "proyek mendesak",
      status: "disetujui",
    },
    {
      name: "Budi Santoso",
      tanggal: "2003-12-05",
      jam: "11:00:00 || 18:00:00",
      keperluan_lembur: "lembur untuk penyelesaian tugas",
      status: "ditolak",
    },
    {
      name: "Siti Nurjanah",
      tanggal: "2004-01-15",
      jam: "08:30:00 || 16:30:00",
      keperluan_lembur: "rapat penting",
      status: "menunggu konfirmasi",
    },
    {
      name: "Andi Prabowo",
      tanggal: "2004-02-10",
      jam: "14:00:00 || 20:00:00",
      keperluan_lembur: "lembur malam",
      status: "menunggu konfirmasi",
    },
    {
      name: "Tina Hartati",
      tanggal: "2004-03-01",
      jam: "10:00:00 || 15:00:00",
      keperluan_lembur: "kerja tim",
      status: "disetujui",
    },
    {
      name: "Joko Widodo",
      tanggal: "2004-03-20",
      jam: "12:00:00 || 19:00:00",
      keperluan_lembur: "pencapaian target",
      status: "menunggu konfirmasi",
    },
    {
      name: "Sari Lestari",
      tanggal: "2004-04-15",
      jam: "09:00:00 || 18:00:00",
      keperluan_lembur: "pelatihan tambahan",
      status: "ditolak",
    },
    {
      name: "Rudi Hartono",
      tanggal: "2004-05-05",
      jam: "13:00:00 || 21:00:00",
      keperluan_lembur: "proyek spesial",
      status: "menunggu konfirmasi",
    },
    {
      name: "Faisal Ramadhan",
      tanggal: "2004-05-22",
      jam: "11:30:00 || 20:30:00",
      keperluan_lembur: "lembur administrasi",
      status: "disetujui",
    },
    {
      name: "Agus Santoso",
      tanggal: "2004-06-11",
      jam: "09:30:00 || 17:30:00",
      keperluan_lembur: "penyelesaian laporan",
      status: "menunggu konfirmasi",
    },
  ]);

  const removeData = (index) => {
    const updateData = data.filter((_, i) => i !== index);
    setData(updateData);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <div className="d-flex gap-5">
            <CardTitle tag="h5">Data Lembur Karyawan</CardTitle>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>

                <th>Tanggal</th>
                <th className="d-flex flex-column">
                  <span>Jam Lembur</span>
                  <span>Mulai | Berakhir</span>
                </th>
                <th>Keperluan Lembur</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                ({ name, tanggal, jam, keperluan_lembur, status }, index) => (
                  <tr key={index} className="border-top">
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{tanggal}</td>
                    <td>{jam}</td>
                    <td>{keperluan_lembur}</td>
                    <td>{status}</td>
                    <td>
                      <Button onClick={() => removeData(index)}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Lembur;
