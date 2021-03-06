rootdir = $(realpath .)

convert_csvs_to_sqlite:
	# wikidata
	touch $(rootdir)/dbs/wikidata.db && rm $(rootdir)/dbs/wikidata.db
	csvs-to-sqlite --table ships --primary-key wikidataUrl --index imo --index wikidataUrl \
		$(rootdir)/../data_files/original.wikidata.ships.csv \
		$(rootdir)/dbs/wikidata.db
	csvs-to-sqlite --table wikipedia_urls --primary-key wikidataUrl --index imo \
		$(rootdir)/../data_files/original.wikidata.urls.csv \
		$(rootdir)/dbs/wikidata.db
	# thetis
	touch $(rootdir)/dbs/thetis.db && rm $(rootdir)/dbs/thetis.db
	csvs-to-sqlite --table ships --primary-key imo --primary-key reporting_period \
		--index imo --index reporting_period --index ship_type \
    $(rootdir)/../data_files/thetis_export_all.csv \
		$(rootdir)/dbs/thetis.db
	# greenferries
	touch $(rootdir)/dbs/greenferries.db && rm $(rootdir)/dbs/greenferries.db
	csvs-to-sqlite --replace-tables --table thetis --shape " \
		imo:imo(TEXT), \
		name:name(TEXT), \
		ship_type:ship_type(TEXT), \
		reporting_period:reporting_period(TEXT), \
		technical_efficiency:technical_efficiency(TEXT), \
		port_of_registry:port_of_registry(TEXT), \
		home_port:home_port(TEXT), \
		ice_class:ice_class(TEXT), \
		doc_issue_date:doc_issue_date(TEXT), \
		doc_expiry_date:doc_expiry_date(TEXT), \
		verifier_number:verifier_number(TEXT), \
		verifier_name:verifier_name(TEXT), \
		verifier_nab:verifier_nab(TEXT), \
		verifier_address:verifier_address(TEXT), \
		verifier_city:verifier_city(TEXT), \
		verifier_accreditation_number:verifier_accreditation_number(TEXT), \
		verifier_country:verifier_country(TEXT), \
		monitoring_method_a:monitoring_method_a(TEXT), \
		monitoring_method_b:monitoring_method_b(TEXT), \
		monitoring_method_c:monitoring_method_c(TEXT), \
		monitoring_method_d:monitoring_method_d(TEXT), \
		annual_monitoring_total_fuel_consumption:annual_monitoring_total_fuel_consumption(REAL), \
		annual_monitoring_fuel_consumption_assigned_to_on_laden:annual_monitoring_fuel_consumption_assigned_to_on_laden(REAL), \
		annual_monitoring_total_co2_emissions:annual_monitoring_total_co2_emissions(REAL), \
		annual_monitoring_co2_emissions_from_all_voyages_between_ports_under_a_ms_juridiction:annual_monitoring_co2_emissions_from_all_voyages_between_ports_under_a_ms_juridiction(REAL), \
		annual_monitoring_co2_emissions_from_all_voyages_which_departed_from_ports_under_a_ms_juridiction:annual_monitoring_co2_emissions_from_all_voyages_which_departed_from_ports_under_a_ms_juridiction(REAL), \
		annual_monitoring_co2_emissions_from_all_voyages_to_ports_under_a_ms_juridiction:annual_monitoring_co2_emissions_from_all_voyages_to_ports_under_a_ms_juridiction(REAL), \
		annual_monitoring_co2_emissions_which_occured_within_ports_under_a_ms_jurisdiction_at_berth:annual_monitoring_co2_emissions_which_occured_within_ports_under_a_ms_jurisdiction_at_berth(REAL), \
		annual_monitoring_co2_emissions_assigned_to_passenger_transport:annual_monitoring_co2_emissions_assigned_to_passenger_transport(REAL), \
		annual_monitoring_co2_emissions_assigned_to_freight_transport:annual_monitoring_co2_emissions_assigned_to_freight_transport(REAL), \
		annual_monitoring_co2_emissions_assigned_to_on_laden:annual_monitoring_co2_emissions_assigned_to_on_laden(REAL), \
		annual_monitoring_total_time_spent_at_sea:annual_monitoring_total_time_spent_at_sea(REAL), \
		annual_average_fuel_consumption_per_distance:annual_average_fuel_consumption_per_distance(REAL), \
		annual_average_fuel_consumption_per_transport_work_mass:annual_average_fuel_consumption_per_transport_work_mass(REAL), \
		annual_average_fuel_consumption_per_transport_work_volume:annual_average_fuel_consumption_per_transport_work_volume(REAL), \
		annual_average_fuel_consumption_per_transport_work_dwt:annual_average_fuel_consumption_per_transport_work_dwt(REAL), \
		annual_average_fuel_consumption_per_transport_work_pax:annual_average_fuel_consumption_per_transport_work_pax(REAL), \
		annual_average_fuel_consumption_per_transport_work_freight:annual_average_fuel_consumption_per_transport_work_freight(REAL), \
		annual_average_co2_emissions_per_distance:annual_average_co2_emissions_per_distance(REAL), \
		annual_average_co2_emissions_per_transport_work_mass:annual_average_co2_emissions_per_transport_work_mass(REAL), \
		annual_average_co2_emissions_per_transport_work_volume:annual_average_co2_emissions_per_transport_work_volume(REAL), \
		annual_average_co2_emissions_per_transport_work_dwt:annual_average_co2_emissions_per_transport_work_dwt(REAL), \
		annual_average_co2_emissions_per_transport_work_pax:annual_average_co2_emissions_per_transport_work_pax(REAL), \
		annual_average_co2_emissions_per_transport_work_freight:annual_average_co2_emissions_per_transport_work_freight(REAL), \
		voluntary_reporting_distance_through_ice:voluntary_reporting_distance_through_ice(REAL), \
		voluntary_reporting_total_time_spent_at_sea:voluntary_reporting_total_time_spent_at_sea(REAL), \
		voluntary_reporting_total_time_spent_at_sea_through_ice:voluntary_reporting_total_time_spent_at_sea_through_ice(REAL), \
		voluntary_reporting_direct_emissions:voluntary_reporting_direct_emissions(REAL), \
		voluntary_reporting_average_fuel_consumption_per_distance_on_laden_voyages:voluntary_reporting_average_fuel_consumption_per_distance_on_laden_voyages(REAL), \
		voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_mass:voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_mass(REAL), \
		voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_volume:voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_volume(REAL), \
		voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_dwt:voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_dwt(REAL), \
		voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_pax:voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_pax(REAL), \
		voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_freight:voluntary_reporting_average_fuel_consumption_per_transport_work_on_laden_voyages_freight(REAL), \
		voluntary_reporting_average_co2_emissions_per_distance_on_laden_voyages:voluntary_reporting_average_co2_emissions_per_distance_on_laden_voyages(REAL), \
		voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_mass:voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_mass(REAL), \
		voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_volume:voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_volume(REAL), \
		voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_dwt:voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_dwt(REAL), \
		voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_pax:voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_pax(REAL), \
		voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_freight:voluntary_reporting_average_co2_emissions_per_transport_work_on_laden_voyages_freight(REAL), \
		voluntary_reporting_additional_comments:voluntary_reporting_additional_comments(TEXT), \
		voluntary_reporting_average_density_of_the_cargo_transported:voluntary_reporting_average_density_of_the_cargo_transported(REAL), \
		annual_computed_distance:annual_computed_distance(REAL), \
		annual_computed_distance_km:annual_computed_distance_km(REAL), \
		annual_computed_pax:annual_computed_pax(REAL), \
		annual_computed_freight:annual_computed_freight(REAL), \
		annual_computed_average_speed:annual_computed_average_speed(REAL), \
		annual_computed_ratio_co2_from_pax:annual_computed_ratio_co2_from_pax(REAL) \
	" \
		$(rootdir)/../data_files/thetis_all_with_computed.csv \
		$(rootdir)/dbs/greenferries.db
	csvs-to-sqlite --replace-tables --table scraped_ship_routes \
		$(rootdir)/../data_files/scraped_ship_routes_cleaned.2020_01_18.csv \
		$(rootdir)/dbs/greenferries.db
	csvs-to-sqlite --replace-tables --table airports \
		$(rootdir)/../data_files/airports.csv \
		$(rootdir)/dbs/greenferries.db

dev: convert_csvs_to_sqlite
	datasette $(rootdir)/dbs/*.db --metadata $(rootdir)/metadata.yml \
		--static static:$(rootdir)/static/ --reload
