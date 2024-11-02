import { useState } from "react";
import { Card, CardBody, CardTitle, Table, Button } from "reactstrap";

const Absensi = () => {
  const [data, setData] = useState([
    {
      nama_karyawan: "Wahyu Rifia Rizki",
      tanggal: "01-02-2003",
      lokasi_absen: "Kampus Kimia",
      jam_masuk: "16:21:14",
      jam_keluar: "18:09:22",
    },
    {
      nama_karyawan: "Dewi Ayu Pratiwi",
      tanggal: "02-02-2003",
      lokasi_absen: "Kampus Biologi",
      jam_masuk: "09:15:00",
      jam_keluar: "11:45:00",
    },
    {
      nama_karyawan: "Budi Santoso",
      tanggal: "03-02-2003",
      lokasi_absen: "Kampus Teknik",
      jam_masuk: "08:00:00",
      jam_keluar: "10:30:00",
    },
    {
      nama_karyawan: "Siti Nurjanah",
      tanggal: "04-02-2003",
      lokasi_absen: "Kampus Ekonomi",
      jam_masuk: "13:00:00",
      jam_keluar: "15:00:00",
    },
    {
      nama_karyawan: "Andi Prabowo",
      tanggal: "05-02-2003",
      lokasi_absen: "Kampus Hukum",
      jam_masuk: "10:30:00",
      jam_keluar: "12:00:00",
    },
    {
      nama_karyawan: "Tina Hartati",
      tanggal: "06-02-2003",
      lokasi_absen: "Kampus Pertanian",
      jam_masuk: "07:45:00",
      jam_keluar: "09:30:00",
    },
    {
      nama_karyawan: "Joko Widodo",
      tanggal: "07-02-2003",
      lokasi_absen: "Kampus Seni",
      jam_masuk: "14:00:00",
      jam_keluar: "16:00:00",
    },
    {
      nama_karyawan: "Faisal Ramadhan",
      tanggal: "08-02-2003",
      lokasi_absen: "Kampus Psikologi",
      jam_masuk: "11:15:00",
      jam_keluar: "13:15:00",
    },
    {
      nama_karyawan: "Rudi Hartono",
      tanggal: "09-02-2003",
      lokasi_absen: "Kampus Informatika",
      jam_masuk: "09:00:00",
      jam_keluar: "11:00:00",
    },
    {
      nama_karyawan: "Lina Kurniawati",
      tanggal: "10-02-2003",
      lokasi_absen: "Kampus Geografi",
      jam_masuk: "08:30:00",
      jam_keluar: "10:00:00",
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
            <CardTitle tag="h5">Data Absensi</CardTitle>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Karyawan</th>
                <th>Tanggal</th>
                <th>Lokasi Absen</th>
                <th>Jam Masuk</th>
                <th>Jam Keluar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    nama_karyawan,
                    tanggal,
                    lokasi_absen,
                    jam_keluar,
                    jam_masuk,
                  },
                  index
                ) => (
                  <tr key={index} className="border-top">
                    <td>{index + 1}</td>
                    <td>{nama_karyawan}</td>
                    <td>{tanggal}</td>
                    <td>{lokasi_absen}</td>
                    <td>{jam_masuk}</td>
                    <td>{jam_keluar}</td>

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

export default Absensi;
